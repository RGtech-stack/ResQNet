"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CheckCircle2, RotateCw } from "lucide-react"

export function RequestAidModal() {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
            setTimeout(() => {
                setOpen(false)
                setIsSuccess(false)
            }, 2000)
        }, 1500)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Request Aid</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-200" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Request Sent Successfully</h3>
                            <p className="text-sm text-muted-foreground">Nearby volunteers have been notified. Keep your phone nearby.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle>Request Emergency Aid</DialogTitle>
                            <DialogDescription>
                                Fill out this form to broadcast your needs to nearby volunteers and resource centers.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" placeholder="Required" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="type" className="text-right">
                                    Needs
                                </Label>
                                <select className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>Medical Assistance</option>
                                    <option>Food & Water</option>
                                    <option>Shelter</option>
                                    <option>Power / Fuel</option>
                                    <option>Rescue / Evacuation</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="urgency" className="text-right">
                                    Urgency
                                </Label>
                                <div className="col-span-3 flex gap-2">
                                    <label className="flex items-center gap-2 text-sm border p-2 rounded cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <input type="radio" name="urgency" value="high" className="accent-red-500" /> Critical
                                    </label>
                                    <label className="flex items-center gap-2 text-sm border p-2 rounded cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <input type="radio" name="urgency" value="medium" defaultChecked /> Moderate
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="location" className="text-right">
                                    Location
                                </Label>
                                <Input id="location" placeholder="Current GPS or Address" className="col-span-3" required />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                                {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />}
                                Broadcast Request
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
