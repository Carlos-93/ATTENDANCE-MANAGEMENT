import { NextResponse } from 'next/server';
import { getCourses } from '@/lib/data';

export async function GET(req: Request) {
  // Controlador GET para obtener todos los cursos de Moodle
  try {
    const courses = await getCourses();
    if (!courses || courses.length === 0) {
      return NextResponse.json({ message: 'No hay cursos registrados' }, { status: 404 });
    }
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error al procesar la solicitud GET:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}