'use client'

export default function Login() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <form className="flex flex-col gap-4">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}