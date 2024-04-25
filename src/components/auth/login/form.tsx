'use client'

export default function Form() {
    return (
        <div className="bg-app flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-8 bg-gray-100 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Iniciar sesión</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" id="email" autoComplete="email" placeholder="nexus@monlau.com" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" id="password" autoComplete="current-password" placeholder="*********" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
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
            </div>
        </div>
    );
}