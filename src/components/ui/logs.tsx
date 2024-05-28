'use client';

import { useFetchLogs } from '@/hooks/useFetchLogs';
import { useFetchUser } from '@/hooks/useFetchUser';
import { UserLogs } from '@/types/user/_types';
import { useMemo } from 'react';
import Image from 'next/image';

export default function Logs() {
    const logs = useFetchLogs();
    const user = useFetchUser();

    const today = new Date();
    const currentDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const isLate = (dateString: string) => {
        if (!dateString) return false;
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return (hours > 8 || (hours === 8 && minutes > 0)) && (hours < 15 || (hours === 15 && minutes < 10));
    };

    const filteredLogs = useMemo(() => {
        if (!user) return logs;

        if (user.role === 'student') {
            return logs.filter(log => log.mdl_user.id === user.id);
        } else if (user.role === 'teacher') {
            return logs.filter(log => log.mdl_user.role === 'student' || log.mdl_user.id === user.id);
        }
        return logs;

    }, [logs, user]);

    const studentsLogs = filteredLogs.filter(log => log.mdl_user.role === 'student');
    const teachersLogs = filteredLogs.filter(log => log.mdl_user.role === 'teacher');

    const viewLogs = (logs: UserLogs[]) => (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
            {logs.map((log) => (
                <li key={log.id} className="flex flex-col bg-gray-800 text-white p-4 rounded-lg">
                    <div className='flex justify-around items-center'>
                        <Image
                            src={log.mdl_user.imagesrc ? log.mdl_user.imagesrc : '/storage/user/default.jpg'}
                            alt={`Imagen ${log.mdl_user.firstname} ${log.mdl_user.lastname}`}
                            width={100} height={100} className="border-2 border-teal-500 rounded-full" priority />
                        <div className='flex flex-col text-end gap-1'>
                            <p className="font-semibold text-lg text-white">{log.mdl_user.firstname} {log.mdl_user.lastname}</p>
                            <p className="text-gray-300">Entrada: <span className={isLate(log.input) ? "text-red-500" : "text-green-500"}>
                                {log.input ? new Date(log.input).toLocaleString() : 'N/A'}</span>
                            </p>
                            <p className="text-gray-300">Salida: {log.output ? new Date(log.output).toLocaleString() : 'N/A'}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-teal-400 mb-14 mt-24'>
                {user && user.role === 'student' ? 'Tus fichajes de hoy' : 'Fichajes de hoy'} - {currentDate}
            </p>
            <section className='w-full'>
                {user && (user.role === 'admin') && (
                    <>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mb-4">Profesores</p>
                        {teachersLogs.length > 0 ? viewLogs(teachersLogs) : <p className="text-white">No hay fichajes registrados para profesores hoy</p>}
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mt-14 mb-4">Alumnos</p>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para alumnos hoy</p>}
                    </>
                )}
                {user && user.role === 'teacher' && (
                    <>
                        {teachersLogs.length > 0 ? viewLogs(teachersLogs) : <p className="text-white">No hay fichajes registrados para ti hoy</p>}
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mt-14 mb-4">Tus Alumnos</p>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para tus alumnos hoy</p>}
                    </>
                )}
                {user && user.role === 'student' && (
                    <>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para ti hoy</p>}
                    </>
                )}
            </section>
        </>
    );
}