"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, House, Sprout, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/ModeTogggle"
import AuthActions from "@/components/AuthActions"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-1 md:hidden">
      <ModeToggle />
      <Button
          variant="ghost"
          size="icon"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-16 z-50 overflow-hidden border-b bg-background shadow-sm transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <House className="size-4" />
            Home
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Sprout className="size-4" />
            Dashboard
          </Link>
          <div className="border-t px-3 pt-3 [&>button]:w-full">
            <AuthActions />
          </div>
        </div>
      </div>
    </div>
  )
}
