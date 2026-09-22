import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sprout,House  } from "lucide-react";
import ModeToggle from "@/components/ModeTogggle";
import AuthActions from "@/components/AuthActions";
import MobileNav from "@/components/MobileNav";




function Navbar() {
    return (
        <nav className="relative border-b bg-background">
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
                    <div className="hidden shrink-0 items-center gap-1 sm:gap-2 md:flex">
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2 sm:px-2.5"
                            render={<Link href="/" />}
                            nativeButton={false}
                        >
                            <House className="size-4" />
                            <span>Home</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2 sm:px-2.5"
                            render={<Link href="/dashboard" />}
                            nativeButton={false}
                        >
                            <Sprout className="size-4" />
                            <span>Dashboard</span>
                        </Button>
                        <ModeToggle />
                        <AuthActions />
                    </div>
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
