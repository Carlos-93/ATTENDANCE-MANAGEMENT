'use client';

import { useState, useEffect } from 'react';
import { getUserSession } from '@/lib/data';
import { User } from '@/types/user/_types';

import Link from 'next/link';
import validate from '@/lib/data';
import Image from 'next/image';
import loginImg from '@images/login.jpeg';
import logoImg from '@images/logo.png';
import IconLogin from '@icons/login.svg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const [userSession, setUserSession] = useState<User | null>(null);

    useEffect(() => {
        // Función asíncrona donde se verifica si existe una sesión activa
        async function checkUserSession() {
            const session = await getUserSession();
            if (session) {
                setUserSession(session);
            }
        }
        checkUserSession();
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Función asíncrona donde se verifica si las credenciales del usuario son correctas
        e.preventDefault();
        try {
            await validate(email, password);
            window.location.href = '/dashboard';
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen w-full relative'>
            <aside className="hidden lg:block relative w-full h-full">
                <Image src={loginImg} alt="Login" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className='object-cover' />
            </aside>
            <main className='flex flex-col justify-center gap-10 bg-gray-800 px-5 md:px-0 -mt-20'>
                <div className='flex justify-center'>
                    <Image src={logoImg} alt="Logo NexusEstudiantil" className='w-[14rem] sm:w-[18rem] shadow-logo' />
                </div>
                <section className="flex flex-col gap-8 max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-5 sm:p-10 shadow">
                    <h2 className='text-2xl sm:text-3xl text-white font-bold text-center'>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                        <div className='flex flex-col text-gray-400'>
                            <label htmlFor="email" className="block font-medium text-teal-600">Correo electrónico</label>
                            <input type="email" id="email" autoComplete="email" placeholder="nexus@monlau.com" required
                                className="rounded-lg bg-gray-700 text-white mt-2 p-2 focus:bg-gray-800 focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col text-gray-400'>
                            <label htmlFor="password" className="block font-medium text-teal-600">Contraseña</label>
                            <input type="password" id="password" autoComplete="current-password" placeholder="*********" required
                                className="rounded-lg bg-gray-700 text-white mt-2 p-2 focus:bg-gray-800 focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex justify-between text-gray-400 flex-col sm:flex-row gap-3'>
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="cursor-pointer h-4 w-4 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="cursor-pointer ml-2 block text-sm text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"> Recordarme </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-teal-600 hover:text-teal-500 transition-all ease-in-out duration-300">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 flex justify-center text-sm sm:text-md bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all ease-in-out duration-300">
                            ACCEDER
                        </button>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                    </form>
                </section>
                {userSession && (
                    <Link href="/dashboard"
                        className="flex justify-center items-center gap-3 font-semibold text-teal-500 mt-4 hover:underline mx-auto">
                        <p>Continuar con {userSession.email}</p>
                        <Image src={IconLogin} alt="Continue session" />
                    </Link>
                )}
            </main>
        </div>
    );
}