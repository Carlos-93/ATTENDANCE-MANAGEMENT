import { Course } from "@/types/courses/_types";

export async function editCourse(data: Course) {
    // Función asíncrona donde editamos un curso de Moodle
    try {
        const response = await fetch('/api/courses', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Error al editar el curso');
        }
    } catch (error) {
        console.error('Error al editar el curso:', error);
        throw error;
    }
};

export async function deleteCourse(id: number) {
    // Función asíncrona donde eliminamos un curso de Moodle
    try {
        const response = await fetch('/api/courses', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el curso');
        }
    } catch (error) {
        console.error('Error al eliminar el curso:', error);
        throw error;
    }
};