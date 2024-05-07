'use client';

import { useState } from 'react';
import validate from '@/app/api/auth/login/route';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const usuario = await validate(email, password);
            console.log('Inicio de sesión exitoso. Bienvenido, ', usuario.firstname);
            window.location.href = '/dashboard';
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className="bg-app flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-8 bg-gray-100 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Iniciar sesión</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" id="email" autoComplete="email" placeholder="nexus@monlau.com" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" id="password" autoComplete="current-password" placeholder="*********" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="cursor-pointer h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="cursor-pointer ml-2 block text-sm text-gray-900"> Recordarme </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Acceder
                    </button>
                </form>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    );
}