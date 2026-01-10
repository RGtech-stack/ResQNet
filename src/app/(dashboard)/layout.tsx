import { Sidebar } from "@/components/layout/Sidebar"
import { Topbar } from "@/components/layout/Topbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[auto_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Topbar />
                <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
