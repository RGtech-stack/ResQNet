"use client"

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Map = dynamic(() => import('./leaflet/LeafletMapInner'), {
    ssr: false,
    loading: () => <Skeleton className="w-full h-full rounded-lg bg-muted/50" />
});

export default function LeafletMap() {
    return (
        <div className="w-full h-[600px] rounded-lg overflow-hidden border">
            <Map />
        </div>
    )
}
