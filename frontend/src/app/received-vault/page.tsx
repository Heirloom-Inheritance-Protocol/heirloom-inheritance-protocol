"use client";

import type { JSX } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { ReceivedInheritances } from "@/components/dashboard/received-inheritances";

export default function ReceivedVaultPage(): JSX.Element {
  const router = useRouter();
  const { ready, authenticated } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  // Show loading state while checking authentication
  if (!ready || !authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Verifying wallet connection...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <FloatingNav
        navItems={[
          { name: "Home", link: "/" },
          { name: "Inherit", link: "/inherit" },
          { name: "Received/Vault", link: "/received-vault" },
        ]}
      />
      <main className="min-h-screen bg-white px-4 pb-16 pt-36 md:pt-40 dark:bg-neutral-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          <div className="w-full rounded-2xl bg-white p-6 dark:bg-neutral-900">
            <ReceivedInheritances />
          </div>
        </div>
      </main>
    </>
  );
}

