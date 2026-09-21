"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, UserRound } from "lucide-react"

import { signOut, useSession } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AuthActions() {
  const router = useRouter()
  const { data: session, isPending } = useSession()

  async function handleSignOut() {
    await signOut()
    router.push("/")
    router.refresh()
  }

  if (isPending) {
    return <div aria-hidden className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
  }

  if (!session?.user) {
    return (
      <Button render={<Link href="/sign-in" />} nativeButton={false}>
        <span className="text-sm font-medium">Login</span>
      </Button>
    )
  }

  const displayName = session.user.name || session.user.email.split("@")[0] || "Profile"
  const initials = displayName.slice(0, 1).toUpperCase()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        render={<Button variant="outline" size="icon" className="size-9 rounded-full" />}
        openOnHover
        aria-label={`Open ${displayName} profile menu`}
      >
        {session.user.image ? (
          <span
            role="img"
            aria-label={`${displayName} profile photo`}
            className="size-full rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${session.user.image})` }}
          />
        ) : (
          <span className="flex size-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {initials}
          </span>
        )}
        <span className="sr-only">{displayName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="px-2.5 py-2">
          <p className="text-sm font-medium">{session.user.name || "Your profile"}</p>
          <p className="truncate text-xs text-muted-foreground">{session.user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/profile" />}>
          <UserRound className="mr-2 size-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => void handleSignOut()}>
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
