'use client';

import Courses from "../ui/courses";
import Logs from "../ui/logs";

export default function Dashboard() {
    const today = new Date();
    const currentDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', });

    return (
        <main className="flex flex-col p-6 md:p-12 lg:p-24 h-full justify-start items-start md:ml-72 gap-10">
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6'>Tus cursos</p>
            <Courses />
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-white mt-6'>Fichajes de hoy - {currentDate}</p>
            <Logs />
        </main>
    );
}