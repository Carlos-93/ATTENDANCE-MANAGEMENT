'use client';

import { useEffect, useState } from 'react';

export default function Courses() {
    const [courses, setCourses] = useState<{ fullname: string }[]>([]);

    useEffect(() => {
        async function fetchCourses() {
            const response = await fetch('/api/courses');
            const data = await response.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {courses.map((course, index) => (
                <div key={index} className="relative flex justify-start items-center hover-shadow bg-gray-800 text-white p-4 md:p-6 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-2">
                        <path
                            d="M9.25 4C9.25 2.48 10.48 1.25 12 1.25C13.52 1.25 14.75 2.48 14.75 4C14.75 5.52 13.52 6.75 12 6.75C10.48 6.75 9.25 5.52 9.25 4Z"
                            fill="white" />
                        <path
                            d="M9.25 20C9.25 18.48 10.48 17.25 12 17.25C13.52 17.25 14.75 18.48 14.75 20C14.75 21.52 13.52 22.75 12 22.75C10.48 22.75 9.25 21.52 9.25 20Z"
                            fill="white" />
                        <path
                            d="M9.25 12C9.25 10.48 10.48 9.25 12 9.25C13.52 9.25 14.75 10.48 14.75 12C14.75 13.52 13.52 14.75 12 14.75C10.48 14.75 9.25 13.52 9.25 12Z"
                            fill="white" />
                    </svg>
                    <h2 className="text-md xl:text-lg font-semibold select-none">{course.fullname}</h2>
                </div>
            ))}
        </div>
    );
}