import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, ShieldAlert, Menu } from "lucide-react"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
                    <ShieldAlert className="h-6 w-6" />
                    <span>ResQNet</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </Link>
                    <Link href="/incidents" className="text-muted-foreground hover:text-foreground transition-colors">
                        Live Map
                    </Link>
                    <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                        Resources
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button size="sm">Get Started</Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
