'use client';

import { useIsAdmin, useIsTeacher, useIsStudent } from '@/hooks/useRole';
import { useFetchLogs } from '@/hooks/useFetchLogs';
import { useFetchUser } from '@/hooks/useFetchUser';
import { UserLogs } from '@/types/user/_types';
import { useMemo, useState } from 'react';

import Image from 'next/image';

export default function Logs() {
    const [filter, setFilter] = useState('all');
    const logs = useFetchLogs();
    const user = useFetchUser();
    const isAdmin = useIsAdmin();
    const isTeacher = useIsTeacher();
    const isStudent = useIsStudent();

    const today = new Date();
    const currentDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const isLate = (dateString: string) => {
        // Función para determinar si la hora de entrada es tarde
        if (!dateString) return false;
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return (hours > 8 || (hours === 8 && minutes > 0)) && (hours < 15 || (hours === 15 && minutes < 10));
    };

    const filteredLogs = useMemo(() => {
        // Función para filtrar los fichajes según el rol del usuario
        if (!user) return logs;

        let userLogs = logs;

        if (isStudent) {
            userLogs = logs.filter(log => log.mdl_user.id === user.id);
        } else if (isTeacher) {
            userLogs = logs.filter(log => log.mdl_user.role === 'student' || log.mdl_user.id === user.id);
        }
        if (filter === 'outside') {
            return userLogs.filter(log => isLate(log.input));
        } else if (filter === 'inside') {
            return userLogs.filter(log => !isLate(log.input));
        }
        return userLogs;

    }, [logs, user, isStudent, isTeacher, filter]);

    const studentsLogs = filteredLogs.filter(log => log.mdl_user.role === 'student');
    const teachersLogs = filteredLogs.filter(log => log.mdl_user.role === 'teacher');

    const viewLogs = (logs: UserLogs[]) => (
        // Función para mostrar los fichajes en la interfaz
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
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-teal-400'>
                {isStudent ? 'Tus fichajes de hoy' : 'Fichajes de hoy'} - {currentDate}
            </p>
            {(isAdmin || isTeacher) && (
                <>
                    <div className="flex items-center gap-5 my-14">
                        <label htmlFor="filter" className="text-white font-medium text-lg">Filtrar fichajes:</label>
                        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 rounded bg-gray-700 text-white focus:outline-none">
                            <option value="all">Todos</option>
                            <option value="outside">Fichaje fuera del horario</option>
                            <option value="inside">Fichaje dentro del horario</option>
                        </select>
                    </div>
                </>
            )}
            <section className='w-full'>
                {isAdmin && (
                    <>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mb-4">Profesores</p>
                        {teachersLogs.length > 0 ? viewLogs(teachersLogs) : <p className="text-white">No hay fichajes registrados para profesores hoy</p>}
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mt-14 mb-4">Alumnos</p>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para alumnos hoy</p>}
                    </>
                )}
                {isTeacher && (
                    <>
                        {teachersLogs.length > 0 ? viewLogs(teachersLogs) : <p className="text-white">No hay fichajes registrados para ti hoy</p>}
                        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mt-14 mb-4">Tus Alumnos</p>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para tus alumnos hoy</p>}
                    </>
                )}
                {isStudent && (
                    <>
                        {studentsLogs.length > 0 ? viewLogs(studentsLogs) : <p className="text-white">No hay fichajes registrados para ti hoy</p>}
                    </>
                )}
            </section>
        </>
    );
}