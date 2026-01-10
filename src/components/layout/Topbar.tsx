import { Button } from "@/components/ui/button"
import { Menu, UserCircle } from "lucide-react"

export function Topbar() {
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
            <div className="w-full flex-1">
                {/* Breadcrumbs or search could go here */}
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6" />
                <span className="sr-only">Toggle user menu</span>
            </Button>
        </header>
    )
}
