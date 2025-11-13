export const CONTRACT_ADDRESS = "0xe2916d40d548C9Bd8a5aae2102ac487C14536B9D";

export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "inheritanceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "successor",
        type: "address",
      },
    ],
    name: "InheritanceClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "inheritanceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "successor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
      { indexed: false, internalType: "string", name: "tag", type: "string" },
    ],
    name: "InheritanceCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "inheritanceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "InheritanceDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "inheritanceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "InheritanceRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "inheritanceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldSuccessor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSuccessor",
        type: "address",
      },
    ],
    name: "SuccessorUpdated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "canAccessInheritance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
    ],
    name: "claimInheritance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_successor", type: "address" },
      { internalType: "string", name: "_ipfsHash", type: "string" },
      { internalType: "string", name: "_tag", type: "string" },
      { internalType: "string", name: "_fileName", type: "string" },
      { internalType: "uint256", name: "_fileSize", type: "uint256" },
    ],
    name: "createInheritance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
    ],
    name: "deleteInheritance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "getActiveInheritancesCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
    ],
    name: "getInheritance",
    outputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "successor", type: "address" },
      { internalType: "string", name: "ipfsHash", type: "string" },
      { internalType: "string", name: "tag", type: "string" },
      { internalType: "string", name: "fileName", type: "string" },
      { internalType: "uint256", name: "fileSize", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "bool", name: "isActive", type: "bool" },
      { internalType: "bool", name: "isClaimed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "getOwnerInheritances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_successor", type: "address" }],
    name: "getSuccessorInheritances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inheritanceCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "inheritances",
    outputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "successor", type: "address" },
      { internalType: "string", name: "ipfsHash", type: "string" },
      { internalType: "string", name: "tag", type: "string" },
      { internalType: "string", name: "fileName", type: "string" },
      { internalType: "uint256", name: "fileSize", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "bool", name: "isActive", type: "bool" },
      { internalType: "bool", name: "isClaimed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "ownerInheritances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
    ],
    name: "revokeInheritance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "successorInheritances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_inheritanceId", type: "uint256" },
      { internalType: "address", name: "_newSuccessor", type: "address" },
    ],
    name: "updateSuccessor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
