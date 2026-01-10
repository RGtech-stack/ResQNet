import { Navbar } from "@/components/layout/Navbar"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-muted/40">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-4">
                {children}
            </div>
        </div>
    )
}
