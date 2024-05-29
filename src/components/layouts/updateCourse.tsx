import { useState, useEffect } from 'react';
import { editCourse } from '@/services/course';
import { UpdateCourseModalProps } from '@/types/modal/_types';

const UpdateCourseModal: React.FC<UpdateCourseModalProps> = ({ courseShortname, courseId, isOpen, onClose, courseLongname }) => {
    const [shortname, setShortname] = useState(courseShortname);
    const [longname, setLongname] = useState(courseLongname);

    async function handleUpdate(e: React.FormEvent) {
        // Función donde llamamos al servicio para editar el curso en Moodle
        e.preventDefault();
        const data = { id: courseId, shortname, longname };

        try {
            await editCourse(courseId, data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error editando el curso:', error);
        }
    };

    useEffect(() => {
        // Effect donde actualizamos los estados de los campos de texto con los valores actuales
        setShortname(courseShortname);
        setLongname(courseLongname);
    }, [courseShortname, courseLongname]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 backdrop-blur-md bg-black/80 transition-opacity" aria-hidden="true"></div>
            <div className="flex flex-col gap-8 relative bg-white rounded-lg max-w-md p-6 shadow w-96">
                <div className="flex flex-col items-center border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold">Actualización del curso &quot;{courseShortname}&quot;</h2>
                </div>
                <form onSubmit={handleUpdate} className="gap-5 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="shortname" className="font-semibold">Nombre de curso</label>
                        <input type="text" id="shortname" value={shortname}
                            onChange={(e) => setShortname(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                            placeholder="Nombre del curso" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="longname" className="font-semibold">Descripción de curso</label>
                        <input type="text" id="longname" value={longname}
                            onChange={(e) => setLongname(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                            placeholder="Descripción del curso" required />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white rounded bg-teal-600 hover:bg-teal-500 mr-2 font-semibold transition-all ease-in-out duration-300">Actualizar</button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 font-semibold transition-all ease-in-out duration-200">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateCourseModal;