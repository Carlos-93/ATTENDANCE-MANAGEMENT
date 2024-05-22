'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
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
        <main className="flex flex-col p-10 flex-grow h-screen justify-center items-center">
            <h1 className='text-4xl text-white'>Courses</h1>
            <ul className='text-white'>
                {courses.map((course, index) => (
                    <li key={index}>{course.fullname}</li>
                ))}
            </ul>
        </main>
    );
};