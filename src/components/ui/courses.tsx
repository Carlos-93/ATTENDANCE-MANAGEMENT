'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useFetchCourses } from '@/hooks/useFetchCourses';
import { useIsAdmin } from '@/hooks/useIsAdmin';

export default function Courses() {
    const [menuVisible, setMenuVisible] = useState<number | null>(null);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const courses = useFetchCourses();
    const isAdmin = useIsAdmin();

    useEffect(() => {
        // Effect donde se maneja el cierre del menú de opciones del curso
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuToggle = useCallback((index: number) => {
        // Función donde se maneja la visibilidad del menú de opciones del curso
        setMenuVisible(menuVisible === index ? null : index);
    }, [menuVisible]);

    const handleDeleteCourse = useCallback(async (id: number) => {
        // Función para eliminar un curso almacenado en Moodle
        try {
            const response = await fetch('/api/courses', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            if (response.ok) { setMenuVisible(null); }
        } catch (error) {
            console.error('Error al eliminar el curso:', error);
        }
    }, []);

    return (
        <>
            <p className='text-2xl md:text-3xl lg:text-4xl font-medium text-teal-400 mb-14'>Tus cursos</p>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
                {courses.length > 0 ? (
                    courses.map((course, index) => (
                        <div key={index}
                            className="relative flex flex-col justify-center items-start gap-1 hover-shadow bg-gray-800 text-white p-4 md:p-6 rounded-lg select-none">
                            {isAdmin && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-4 right-2 cursor-pointer"
                                    onClick={() => handleMenuToggle(index)}>
                                    <path d="M9.25 4C9.25 2.48 10.48 1.25 12 1.25C13.52 1.25 14.75 2.48 14.75 4C14.75 5.52 13.52 6.75 12 6.75C10.48 6.75 9.25 5.52 9.25 4Z"
                                        fill="white" />
                                    <path d="M9.25 20C9.25 18.48 10.48 17.25 12 17.25C13.52 17.25 14.75 18.48 14.75 20C14.75 21.52 13.52 22.75 12 22.75C10.48 22.75 9.25 21.52 9.25 20Z"
                                        fill="white" />
                                    <path d="M9.25 12C9.25 10.48 10.48 9.25 12 9.25C13.52 9.25 14.75 10.48 14.75 12C14.75 13.52 13.52 14.75 12 14.75C10.48 14.75 9.25 13.52 9.25 12Z"
                                        fill="white" />
                                </svg>
                            )}
                            <p className="font-semibold">{course.shortname}</p>
                            <p className="font-semibold">{course.longname}</p>
                            {menuVisible === index && (
                                <div ref={menuRef} className="absolute top-7 right-2 bg-gray-700 text-white font-medium shadow-lg z-10 rounded-lg">
                                    <button className="flex py-3 pl-3 pr-14 hover:bg-gray-600 w-full hover:text-teal-400 transition-all ease-in-out duration-300 rounded-t-lg">Editar curso</button>
                                    <button onClick={() => handleDeleteCourse(course.id)}
                                        className="flex py-3 pl-3 pr-14 hover:bg-gray-600 w-full hover:text-red-500 transition-all ease-in-out duration-300 rounded-b-lg">Eliminar curso</button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-white">No hay cursos registrados</p>
                )}
            </section>
        </>
    );
}