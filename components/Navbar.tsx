import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sprout,House  } from "lucide-react";
import ModeToggle from "@/components/ModeTogggle";
import AuthActions from "@/components/AuthActions";




function Navbar() {
    return (
        <nav className="border-b bg-background">
            <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
                <div className="flex h-16 min-w-0 items-center justify-between gap-3">
                    {/* Logo */}
                    <div className="min-w-0 flex-1">
                        <Link
                            href="/"
                            className="block truncate font-mono text-lg font-bold tracking-wider text-primary sm:text-xl"
                        >
                            🌱 Plantventory
                        </Link>
                    </div>

                    {/* Navbar components */}
                    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2 sm:px-2.5"
                            render={<Link href="/" />}
                            nativeButton={false}
                        >
                            <House className="size-4" />
                            <span className="hidden lg:inline">Home</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2 sm:px-2.5"
                            render={<Link href="/dashboard" />}
                            nativeButton={false}
                        >
                            <Sprout className="size-4" />
                            <span className="hidden lg:inline">Dashboard</span>
                        </Button>
                        <ModeToggle />
                        <AuthActions />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
