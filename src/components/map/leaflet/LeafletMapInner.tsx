"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useIncidents } from '@/hooks/useIncidents';
import { Skeleton } from '@/components/ui/skeleton';

// Fix for default marker icon in Next.js
const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LeafletMapInner() {
    const { incidents, loading } = useIncidents();

    if (loading) {
        return <Skeleton className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    }

    return (
        <MapContainer
            center={[40.7128, -74.0060]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {incidents.map(incident => (
                <Marker key={incident.id} position={[incident.lat, incident.lng]}>
                    <Popup>
                        <div className="p-1 max-w-[200px]">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`inline-block w-2.5 h-2.5 rounded-full ${incident.severity === 'Critical' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : incident.severity === 'High' ? 'bg-orange-500' : 'bg-blue-500'}`}></span>
                                <strong className="text-sm">{incident.type}</strong>
                            </div>
                            <p className="text-xs text-muted-foreground">{incident.description}</p>
                            <div className="mt-2 text-[10px] text-slate-400">
                                {incident.timestamp?.seconds ? new Date(incident.timestamp.seconds * 1000).toLocaleString() : 'Just now'}
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
