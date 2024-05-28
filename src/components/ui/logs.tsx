'use client';

import { useFetchLogs } from '@/hooks/useFetchLogs';
import { useFetchUser } from '@/hooks/useFetchUser';
import { useMemo } from 'react';
import Image from 'next/image';

export default function Logs() {
    const logs = useFetchLogs();
    const user = useFetchUser();

    const today = new Date();
    const currentDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const isLate = (dateString: string) => {
        // Función donde comprobamos si la hora de entrada es posterior a las 8:00
        if (!dateString) return false;
        const date = new Date(dateString);
        return date.getHours() > 8 || (date.getHours() === 8 && date.getMinutes() > 0);
    };

    const filteredLogs = useMemo(() => {
        // Función donde filtramos los fichajes según el rol del usuario logueado
        if (!user) return logs;

        if (user.role === 'student') {
            return logs.filter(log => log.mdl_user.id === user.id);
        } else if (user.role === 'teacher') {
            return logs.filter(log => log.mdl_user.role === 'student' || log.mdl_user.id === user.id);
        }
        return logs;
    }, [logs, user]);

    return (
        <>
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-teal-400 mb-14 mt-24'>
                {user && user.role === 'student' ? 'Tus fichajes de hoy' : 'Fichajes de hoy'} - {currentDate}
            </p>
            <section className='w-full'>
                {filteredLogs.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
                        {filteredLogs.map((log) => (
                            <li key={log.id} className="flex flex-col bg-gray-800 text-white p-4 rounded-lg">
                                <div className='flex justify-around items-center'>
                                    <Image
                                        src={log.mdl_user.imagesrc ? log.mdl_user.imagesrc : '/storage/user/default.png'}
                                        alt={`Imagen ${log.mdl_user.firstname} ${log.mdl_user.lastname}`}
                                        width={100} height={100} className="rounded-full" priority />
                                    <div className='flex flex-col text-end gap-1'>
                                        <p className="font-semibold text-lg text-teal-400">{log.mdl_user.firstname} {log.mdl_user.lastname}</p>
                                        <p className="text-gray-300">Entrada: <span className={isLate(log.input) ? "text-red-500" : "text-gray-300"}>
                                            {log.input ? new Date(log.input).toLocaleString() : 'N/A'}</span>
                                        </p>
                                        <p className="text-gray-300">
                                            Salida: {log.output ? new Date(log.output).toLocaleString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-white">No hay fichajes registrados para hoy</p>
                )}
            </section>
        </>
    );
}