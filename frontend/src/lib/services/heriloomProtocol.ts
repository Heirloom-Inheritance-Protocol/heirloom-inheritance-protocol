import { decodeEventLog } from "viem";
import { sepolia } from "viem/chains";
import { getWalletClient, publicClient } from "../viem";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract";

interface CreateInheritanceParams {
  successor: `0x${string}`;
  ipfsHash: string;
  tag: string;
  fileName: string;
  fileSize: bigint;
}

/**
 * Creates a new inheritance on the blockchain
 * @returns The inheritance ID
 */
export async function createInheritance({
  successor,
  ipfsHash,
  tag,
  fileName,
  fileSize,
}: CreateInheritanceParams): Promise<bigint> {
  const { walletClient, address } = await getWalletClient();

  // Check if wallet is on the correct chain
  const chainId = await walletClient.getChainId();
  if (chainId !== sepolia.id) {
    try {
      // Request chain switch
      await walletClient.switchChain({ id: sepolia.id });
    } catch {
      throw new Error(
        `Please switch your wallet to Sepolia network. Current chain: ${chainId}, Required: ${sepolia.id}`,
      );
    }
  }

  // Simulate the transaction to check for errors
  const { request } = await publicClient.simulateContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: "createInheritance",
    args: [successor, ipfsHash, tag, fileName, fileSize],
    account: address,
  });

  // Execute the transaction
  const hash = await walletClient.writeContract(request);

  // Wait for the transaction to be mined
  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  // Parse the logs to get the inheritance ID from the InheritanceCreated event
  const log = receipt.logs.find((log) => {
    try {
      const decoded = decodeEventLog({
        abi: CONTRACT_ABI,
        data: log.data,
        topics: log.topics,
      });
      return decoded.eventName === "InheritanceCreated";
    } catch {
      return false;
    }
  });

  if (!log) {
    throw new Error("InheritanceCreated event not found in transaction logs");
  }

  const decoded = decodeEventLog({
    abi: CONTRACT_ABI,
    data: log.data,
    topics: log.topics,
  });

  const args = decoded.args as unknown as { inheritanceId: bigint };
  return args.inheritanceId;
}
