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
                <div key={index} className="hover-shadow bg-gray-800 text-white p-4 md:p-6 rounded-lg">
                    <h2 className="text-lg lg:text-xl font-semibold select-none">{course.fullname}</h2>
                </div>
            ))}
        </div>
    );
}