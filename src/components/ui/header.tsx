'use client';

import { useEffect, useState } from 'react';
import { User } from '@/types/user/_types';
import Image from 'next/image';

export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Función asíncrona para obtener los datos del usuario autenticado
        async function fetchUser() {
            const response = await fetch('/api/user/userSession');
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, []);

    return (
        <header className="sticky top-0 w-full flex justify-between md:justify-end items-center py-2 md:py-5 px-5 backdrop-blur-lg bg-black/100 z-10">
            <div className="md:hidden">
                <Image src="/assets/images/logo.png" alt="Logo Nexus Estudiantil" width={170} height={170} />
            </div>
            <div className="flex gap-4 items-center bg-slate-50 p-3 px-6 rounded-lg shadow-lg">
                <Image src="/assets/images/user.jpg" alt="Foto de perfil" width={50} height={50} className="rounded-full" />
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