'use server';

import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { decodeToken, generateAccessToken } from '@/lib/jwt';
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

        const token = await generateAccessToken({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role });

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

// Función donde se obtiene la información del usuario a partir del token de acceso
export async function getUserSession() {
    try {
        const cookieStore = cookies();

        const accessToken = cookieStore.get('access-token');
        if (!accessToken) return false;

        const decoded = await decodeToken(accessToken.value);
        if (!decoded || !decoded.userId) return false;

        return { firstname: decoded.firstname, lastname: decoded.lastname, email: decoded.email, role: decoded.role };
    } catch (error) {
        console.error('Error en getUserSession:', error);
        return false;
    }
}

// Función donde se obtiene el ID del usuario a partir del token de acceso
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