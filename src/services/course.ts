export async function deleteCourse(id: number) {
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

export async function editCourse(id: number, data: any) {
    try {
        const response = await fetch(`/api/courses/${id}`, {
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