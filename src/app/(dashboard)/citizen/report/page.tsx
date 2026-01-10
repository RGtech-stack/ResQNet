"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, AlertTriangle, Send } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ReportIncidentPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            router.push('/citizen')
        }, 2000)
    }

    return (
        <div className="max-w-2xl mx-auto w-full pb-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Report an Incident</h1>
                <p className="text-muted-foreground">
                    Provide details about the emergency to help responders prioritize and act.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                                Type & Severity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <TypeSelect label="Fire" icon="🔥" />
                                <TypeSelect label="Flood" icon="💧" />
                                <TypeSelect label="Medical" icon="🚑" />
                                <TypeSelect label="Structure" icon="🏚️" />
                                <TypeSelect label="Violence" icon="⚔️" />
                                <TypeSelect label="Other" icon="❓" />
                            </div>
                            <div className="pt-2">
                                <label className="text-sm font-medium mb-2 block">Severity Assessment</label>
                                <div className="flex gap-4">
                                    <Badge variant="outline" className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 p-2 px-4">Low</Badge>
                                    <Badge variant="warning" className="cursor-pointer bg-amber-500 hover:bg-amber-600 p-2 px-4">Medium</Badge>
                                    <Badge variant="destructive" className="cursor-pointer hover:bg-red-700 p-2 px-4 border-2 border-transparent hover:border-black">Critical</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                                Location & Evidence
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="relative">
                                <div className="absolute left-3 top-3 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <Input className="pl-9" placeholder="Enter location or use current GPS" />
                            </div>
                            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                                <span className="text-sm font-medium text-muted-foreground">Upload Photo/Video evidence</span>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-2 block">Description</label>
                                <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Describe the situation..." />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex gap-4 sticky bottom-4">
                        <Button type="button" variant="outline" className="w-full" onClick={() => router.back()}>Cancel</Button>
                        <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                            {isSubmitting ? (
                                "Submitting Report..."
                            ) : (
                                <>
                                    Submit Report <Send className="h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function TypeSelect({ label, icon }: { label: string, icon: string }) {
    const [selected, setSelected] = useState(false)
    return (
        <div
            onClick={() => setSelected(!selected)}
            className={`border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer transition-all ${selected ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:border-primary/50'}`}
        >
            <span className="text-2xl">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    )
}
