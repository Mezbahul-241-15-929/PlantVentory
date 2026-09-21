"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending) return <p className="mt-8 text-center text-muted-foreground">Loading...</p>;
  if (!session?.user) return <p className="mt-8 text-center text-muted-foreground">Redirecting...</p>;

  const { user } = session;

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center space-y-4 p-6 text-foreground">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {user.name || "User"}!</p>
      <p>Email: {user.email}</p>
      <p className="text-sm text-muted-foreground">
        Role: <span className="uppercase">{user.role}</span>
      </p>

      {user.role === "admin" && (
        <div className="w-full rounded-md border border-purple-200 bg-purple-50 p-4 text-center dark:border-purple-800 dark:bg-purple-950/50">
          <p className="font-semibold text-purple-900 dark:text-purple-200">Admin Login</p>
          <p className="text-sm text-purple-700 dark:text-purple-300">You have full admin access.</p>
        </div>
      )}

      {user.role === "manager" && (
        <div className="w-full rounded-md border border-blue-200 bg-blue-50 p-4 text-center dark:border-blue-800 dark:bg-blue-950/50">
          <p className="font-semibold text-blue-900 dark:text-blue-200">User is Manager</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">You have manager-level access.</p>
        </div>
      )}

      <Button
        variant="outline"
        onClick={() =>
          signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in"),
            },
          })
        }
        className="w-full"
      >
        Sign Out
      </Button>
    </main>
  );
}
