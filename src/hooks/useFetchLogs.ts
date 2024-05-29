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
        fetchLogs();

        const intervalId = setInterval(fetchLogs, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return logs;
}