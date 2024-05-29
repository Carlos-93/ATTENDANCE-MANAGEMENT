'use server';

import { decodeToken, generateAccessToken } from '@/services/jwt';
import { Course } from '@/types/courses/_types';
import { cookies } from 'next/headers';

import prisma from './prisma';
import bcrypt from "bcrypt";

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
            where: {
                id: decoded.userId
            },
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                role: true,
                imagesrc: true
            },
        });

        if (!user) return null;

        return {
            id: decoded.userId,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email || '',
            role: user.role,
            imagesrc: user.imagesrc
        };
    } catch (error) {
        console.error('Error en getUserSession:', error);
        return null;
    }
}

export async function getUsersLogs() {
    // Función asincrona donde se obtienen los fichajes de los usuarios de Moodle
    try {
        const usersLogs = await prisma.mdl_user_logs.findMany({
            select: {
                id: true,
                uid: true,
                input: true,
                output: true,
                mdl_user: {
                    select: {
                        id: true,
                        role: true,
                        firstname: true,
                        lastname: true,
                        imagesrc: true
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
                id: true,
                shortname: true,
                longname: true,
            }
        });

        return courses;
    } catch (error) {
        console.error('Error al obtener los cursos:', error);
        return [];
    }
}

export async function updateCourse(id: number, course: Course) {
    // Función asincrónica donde se actualiza un curso existente en Moodle
    try {
        const updatedCourse = await prisma.mdl_course.update({
            where: {
                id
            },
            data: {
                shortname: course.shortname,
                longname: course.longname,
            }
        });

        return updatedCourse;
    } catch (error) {
        console.error('Error al actualizar el curso:', error);
        return null;
    }
}

export async function deleteCourse(id: number) {
    // Función asincrónica donde se elimina un curso de Moodle
    try {
        await prisma.mdl_course.delete({
            where: {
                id
            }
        });

        return true;
    } catch (error) {
        console.error('Error al eliminar el curso:', error);
        return false;
    }
}