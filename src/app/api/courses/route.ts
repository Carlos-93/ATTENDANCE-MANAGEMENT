import { NextResponse } from 'next/server';
import { getCourses, updateCourse, deleteCourse } from '@/lib/data';

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

export async function PUT(req: Request) {
  // Controlador PUT para actualizar un curso en Moodle
  try {
    const data = await req.json();
    const updatedCourse = await updateCourse(data.id, data);
    if (!updatedCourse) {
      return NextResponse.json({ message: 'Curso no encontrado' }, { status: 404 });
    }
    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error('Error al procesar la solicitud PUT:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  // Controlador DELETE para eliminar un curso en Moodle
  try {
    const { id } = await req.json();
    const deleted = await deleteCourse(id);
    if (!deleted) {
      return NextResponse.json({ message: 'Curso no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Curso eliminado exitosamente' });
  } catch (error) {
    console.error('Error al procesar la solicitud DELETE:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}