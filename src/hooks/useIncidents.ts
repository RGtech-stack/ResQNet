"use client"

import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Incident {
    id: string;
    type: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
    lat: number;
    lng: number;
    timestamp: Timestamp;
}

const DEFAULT_INCIDENTS: Incident[] = [
    { id: '1', lat: 40.7128, lng: -74.0060, type: 'Flood', severity: 'Critical', description: 'Flooding in downtown area', timestamp: Timestamp.now() },
    { id: '2', lat: 40.7200, lng: -73.9900, type: 'Fire', severity: 'High', description: 'Structure fire on 5th Ave', timestamp: Timestamp.now() },
    { id: '3', lat: 40.7300, lng: -74.0100, type: 'Medical', severity: 'Medium', description: 'Ambulance requested', timestamp: Timestamp.now() },
];

export function useIncidents() {
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // If Firebase env vars are missing, fall back to mock data
        if (!db) {
            console.warn("Firebase not configured, utilizing mock data.");
            setIncidents(DEFAULT_INCIDENTS);
            setLoading(false);
            return;
        }

        try {
            const q = query(collection(db, 'incidents'), orderBy('timestamp', 'desc'));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newIncidents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Incident[];

                setIncidents(newIncidents.length > 0 ? newIncidents : DEFAULT_INCIDENTS); // Fallback if DB empty for demo
                setLoading(false);
            }, (err) => {
                console.error("Firebase Snapshot Error:", err);
                setIncidents(DEFAULT_INCIDENTS);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (err) {
            console.error("Firebase Init Error:", err);
            setIncidents(DEFAULT_INCIDENTS);
            setLoading(false);
        }
    }, []);

    const reportIncident = async (incident: Omit<Incident, 'id' | 'timestamp'>) => {
        if (!db) {
            // Mock addition
            const newIncident = { ...incident, id: Math.random().toString(), timestamp: Timestamp.now() };
            setIncidents(prev => [newIncident, ...prev]);
            return;
        }

        await addDoc(collection(db, 'incidents'), {
            ...incident,
            timestamp: serverTimestamp()
        });
    };

    return { incidents, loading, reportIncident };
}
