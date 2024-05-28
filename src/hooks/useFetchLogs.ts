import { useState, useEffect } from 'react';
import { UserLogs } from '@/types/user/_types';

export function useFetchLogs() {
    const [logs, setLogs] = useState<UserLogs[]>([]);

    useEffect(() => {
        async function fetchLogs() {
            const response = await fetch('/api/user/userLogs');
            const data = await response.json();
            setLogs(data);
        }

        // Fetch logs immediately when the component mounts
        fetchLogs();

        // Set up an interval to fetch logs every 
        const intervalId = setInterval(fetchLogs);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return logs;
}