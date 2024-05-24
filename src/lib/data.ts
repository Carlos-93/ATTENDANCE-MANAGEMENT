'use server';

import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { decodeToken, generateAccessToken } from '@/services/api/jwt';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Función donde se verifica si las credenciales del usuario son correctas
export default async function validate(email: string, password: string): Promise<any> {
    try {
        const user = await prisma.mdl_user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new Error('El correo electrónico proporcionado no está registrado');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('La contraseña proporcionada es incorrecta');
        }

        const token = await generateAccessToken({ id: user.id });

        cookies().set('access-token', token, {
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
        if (!decoded || typeof decoded.userId !== 'number') return false;

        const user = await prisma.mdl_user.findUnique({
            where: { id: decoded.userId },
            select: { firstname: true, lastname: true, email: true, role: true },
        });

        if (!user) return false;

        return { firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role };
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

// Función donde se obtienen todos los fullname de los cursos
export async function getCourses() {
    try {
        const courses = await prisma.mdl_course.findMany({
            select: {
                fullname: true
            }
        });

        return courses;
    } catch (error) {
        console.error('Error al obtener los cursos:', error);
        return false;
    }
}

// Función donde se cierra la sesión del usuario
export async function destroySession() {
    cookies().delete('access-token');
}