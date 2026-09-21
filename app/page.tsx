"use client";

import { Hero1 } from "@/components/hero1";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <Hero1/>
    </>
  );
}