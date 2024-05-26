'use server';

import prisma from './prisma';
import bcrypt from "bcrypt";
import { cookies } from 'next/headers';
import { decodeToken, generateAccessToken } from '@/services/jwt';

export default async function validate(email: string, password: string): Promise<any> {
    // Función donde se verifica si las credenciales del usuario son correctas
    try {
        const user = await prisma.mdl_user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new Error('El usuario proporcionado no existe');
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
    // Función donde se obtiene la información del usuario de la sesión
    try {
        const cookieStore = cookies();

        const accessToken = cookieStore.get('access-token');
        if (!accessToken) return null;

        const decoded = await decodeToken(accessToken.value);
        if (!decoded || typeof decoded.userId !== 'number') return null;

        const user = await prisma.mdl_user.findUnique({
            where: { id: decoded.userId },
            select: { firstname: true, lastname: true, email: true, role: true },
        });

        if (!user) return null;

        return { id: decoded.userId, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role };
    } catch (error) {
        console.error('Error en getUserSession:', error);
        return null;
    }
}

export async function getUsersLogs() {
    // Función donde se obtienen los fichajes de los usuarios
    try {
        const usersLogs = await prisma.mdl_user_logs.findMany({
            select: {
                id: true,
                uid: true,
                input: true,
                output: true,
                mdl_user: {
                    select: {
                        firstname: true,
                        lastname: true
                    }
                }
            }
        });

        return usersLogs;
    } catch (error) {
        console.error('Error al obtener los fichajes de los usuarios:', error);
        return [];
    }
}

export async function destroySession() {
    // Función donde se elimina la sesión del usuario
    cookies().delete('access-token');
}

export async function getCourses() {
    // Función asincrónica donde se obtienen todos los cursos de Moodle
    try {
        const courses = await prisma.mdl_course.findMany({
            select: {
                fullname: true
            }
        });

        return courses;
    } catch (error) {
        console.error('Error al obtener los cursos:', error);
        return [];
    }
}