'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Course } from '@/types/courses/_types';

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [menuVisible, setMenuVisible] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Función asíncrona para obtener los cursos de Moodle a través de la API
        async function fetchCourses() {
            const response = await fetch('/api/courses');
            const data = await response.json();
            setCourses(data);
        }
        fetchCourses();
    }, []);

    useEffect(() => {
        // Función para cerrar el menú de opciones al hacer clic fuera de él
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

    // Función Callback donde se maneja el estado de visibilidad del menú de opciones
    const handleMenuToggle = useCallback((index: number) => {
        setMenuVisible(menuVisible === index ? null : index);
    }, [menuVisible]);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {courses.length > 0 ? (
                courses.map((course, index) => (
                    <div key={index}
                        className="relative flex justify-start items-center hover-shadow bg-gray-800 text-white p-4 md:p-6 rounded-lg">
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
                        <h2 className="font-semibold select-none">{course.fullname}</h2>
                        {menuVisible === index && (
                            <div ref={menuRef} className="absolute top-7 right-2 bg-gray-700 text-white shadow-lg z-10 rounded-lg">
                                <button className="flex py-3 pl-3 pr-14 hover:bg-gray-600 w-full hover:text-teal-400 transition-all ease-in-out duration-300 rounded-lg">Editar curso</button>
                                <button className="flex py-3 pl-3 pr-14 hover:bg-gray-600 w-full hover:text-teal-400 transition-all ease-in-out duration-300 rounded-lg">Eliminar curso</button>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-white">No hay cursos registrados</p>
            )}
        </section>
    );
}