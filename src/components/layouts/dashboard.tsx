'use client';

import Courses from "../ui/courses";

export default function Dashboard() {
    return (
        <main className="flex flex-col p-6 md:p-12 lg:p-24 h-screen justify-start items-start ml-72 gap-10">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6'>Tus Cursos</h1>
            <Courses />
        </main>
    );
}