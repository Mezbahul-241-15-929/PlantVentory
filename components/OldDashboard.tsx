"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending) return <p className="text-center mt-8 text-white">Loading...</p>;
  if (!session?.user) return <p className="text-center mt-8 text-white">Redirecting...</p>;

  const { user } = session;

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {user.name || "User"}!</p>
      <p>Email: {user.email}</p>
      <p className="text-sm text-neutral-400">
        Role: <span className="uppercase">{user.role}</span>
      </p>

      {user.role === "admin" && (
        <div className="w-full bg-purple-950 border border-purple-700 rounded-md p-4 text-center">
          <p className="font-semibold text-purple-300">Admin Login</p>
          <p className="text-sm text-purple-200">You have full admin access.</p>
        </div>
      )}

      {user.role === "manager" && (
        <div className="w-full bg-blue-950 border border-blue-700 rounded-md p-4 text-center">
          <p className="font-semibold text-blue-300">User is Manager</p>
          <p className="text-sm text-blue-200">You have manager-level access.</p>
        </div>
      )}

      <button
        onClick={() =>
          signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in"),
            },
          })
        }
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        Sign Out
      </button>
    </main>
  );
}