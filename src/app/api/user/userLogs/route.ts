import { NextResponse } from 'next/server';
import { getUsersLogs } from '@/lib/data';

export async function GET(req: Request) {
    // Controlador GET para obtener todos los logs de los usuarios
    try {
        const userLogs = await getUsersLogs();
        if (!userLogs || userLogs.length === 0) {
            return NextResponse.json({ message: 'No hay logs de usuarios registrados' }, { status: 404 });
        }
        return NextResponse.json(userLogs);
    } catch (error) {
        console.error('Error al procesar la solicitud GET:', error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}