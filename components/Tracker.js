'use client'

import * as ackeeTracker from 'ackee-tracker';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Tracker({url, id, options}) {
    const [tracker, setTracker] = useState(null);
    const pathname = usePathname();
    
    useEffect(() => {
        const tracker = ackeeTracker.create(url, options);
    }, []);

    useEffect(() => {
        tracker?.record(id)
        console.log('recorded', id);
    }, [pathname]);
}