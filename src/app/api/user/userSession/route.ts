import { NextResponse } from 'next/server';
import { getUserSession } from '@/lib/data';

export async function GET(req: Request) {
    // Controlador GET para obtener la sesión del usuario
    try {
        const userSession = await getUserSession();
        if (!userSession) {
            return NextResponse.json({ message: 'No hay sesión de usuario registrada' }, { status: 404 });
        }
        return NextResponse.json(userSession);
    } catch (error) {
        console.error('Error al procesar la solicitud GET:', error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}