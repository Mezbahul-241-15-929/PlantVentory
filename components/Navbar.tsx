import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import ModeToggle from "@/components/ModeTogggle";


function Navbar() {
    return (
        <nav className="border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >
                            🌱 Plantventory
                        </Link>
                    </div>

                    {/* Navbar components */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2"
                            render={<Link href="/plants" />}
                            nativeButton={false}
                        >
                            <Sprout className="w-4 h-4" />
                            <span className="hidden lg:inline">Plants</span>
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar