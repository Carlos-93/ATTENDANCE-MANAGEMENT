import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";
import { decodeToken, generateAccessToken } from '@/lib/jwt';

const prisma = new PrismaClient();

export default async function validate(email: string, password: string): Promise<any> {
    try {
        const user = await prisma.mdl_user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new Error('El correo electrónico proporcionado no está registrado.');
        }

        if (user.password !== password) {
            throw new Error('La contraseña proporcionada es incorrecta.');
        }

        const token = await generateAccessToken({ id: user.id, firstname: user.firstname, email: user.email, role: user.role });

        cookies().set({
            name: 'access-token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        return user;
    } catch (error) {
        console.error('Error al verificar las credenciales:', error);
        throw error;
    }
}

export async function getUserSession() {
    try {
        const cookieStore = cookies();

        const accessToken = cookieStore.get('access-token');
        if (!accessToken) return false;

        const decoded = await decodeToken(accessToken.value);

        if (!decoded || !decoded.userId) return false;

        return { firstname: decoded.firstname, email: decoded.email, role: decoded.role };
    } catch (error) {
        console.error('Error en getUserSession:', error);
        return false;
    }
}

export async function getUserId() {
    try {
        const cookieStore = cookies();

        const accessToken = cookieStore.get('access-token');
        if (!accessToken) return false;

        const decoded = await decodeToken(accessToken.value);

        if (!decoded || !decoded.userId) return false;

        return decoded.userId;
    } catch (error) {
        console.error('Error en getUserId:', error);
        return false;
    }
}

export async function destroySession() {
    cookies().delete('access-token');
}