export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Iniciar sesión</h1>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
          <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
          <input type="password" id="password" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
          <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors focus:outline-none focus:bg-blue-600">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}