'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [user, setUser] = useState<{ firstname: string, lastname: string, email: string, role: string } | null>(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('/api/user');
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, []);

    return (
        <header className="sticky top-0 w-full flex justify-between md:justify-end items-center py-2 md:py-5 px-5 backdrop-blur-lg bg-black/100">
            <div className="md:hidden">
                <Image src="/assets/images/logo.png" alt="Logo Nexus Estudiantil" width={170} height={170} />
            </div>
            <div className="flex gap-4 items-center bg-slate-50 p-3 px-6 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-square" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                </svg>
                <div className="flex flex-col">
                    {user ? (
                        <article className='flex flex-col'>
                            <div className='flex gap-1'>
                                <span className="font-semibold">{user.firstname}</span>
                                <span className="font-semibold">{user.lastname}</span>
                                <span className="text-gray-500">({user.role})</span>
                            </div>
                            <span className="text-gray-500">{user.email}</span>
                        </article>
                    ) : (
                        <span>Loading user...</span>
                    )}
                </div>
            </div>
        </header>
    );
}