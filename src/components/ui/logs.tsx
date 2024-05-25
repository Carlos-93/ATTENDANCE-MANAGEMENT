'use client';

import { useEffect, useState } from 'react';

export default function Logs() {
    const [logs, setLogs] = useState<{ id: string, uid: string, input: string, output: string }[]>([]);

    useEffect(() => {
        async function fetchLogs() {
            const response = await fetch('/api/user/userLogs');
            const data = await response.json();
            setLogs(data);
        }
        fetchLogs();
    }, []);

    return (
        <section className='w-full'>
            {logs.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 select-none">
                    {logs.map((log) => (
                        <li key={log.id} className="bg-gray-800 text-white p-4 rounded-lg">
                            <p className="font-semibold">{log.uid}</p>
                            <p className="text-gray-300">Entrada: {log.input ? new Date(log.input).toLocaleString() : 'N/A'}</p>
                            <p className="text-gray-300">Salida: {log.output ? new Date(log.output).toLocaleString() : 'N/A'}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-white">No hay fichajes registrados para hoy</p>
            )}
        </section>
    );
}