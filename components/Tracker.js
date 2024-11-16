'use client'

import * as ackeeTracker from 'ackee-tracker';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Tracker({url, id, options}) {
    const [tracker, setTracker] = useState(null);
    const pathname = usePathname();
    
    useEffect(() => {
        setTracker(ackeeTracker.create(url, options));
    }, []);

    useEffect(() => {
        tracker?.record(id)
    }, [pathname, tracker]);
}