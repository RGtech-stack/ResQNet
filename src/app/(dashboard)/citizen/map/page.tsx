import MapboxMap from "@/components/map/MapboxMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";

export default function CitizenMapPage() {
    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Live Incident Map</h1>
                <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter Incidents
                </Button>
            </div>

            <div className="flex-1 w-full min-h-[600px] relative">
                <MapboxMap />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="py-4">
                        <CardTitle className="text-sm">Safe Zones</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <p className="text-xs text-muted-foreground">Active shelters</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="py-4">
                        <CardTitle className="text-sm">High Risk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">3</div>
                        <p className="text-xs text-muted-foreground">Areas avoided</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="py-4">
                        <CardTitle className="text-sm">Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Live</div>
                        <p className="text-xs text-muted-foreground">Real-time sync on</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
