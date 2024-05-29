import { useState, useEffect } from 'react';
import { editCourse } from '@/services/course';
import { UpdateCourseModalProps } from '@/types/modal/_types';

const UpdateCourseModal: React.FC<UpdateCourseModalProps> = ({ courseTitle, courseId, isOpen, onClose, courseDescription }) => {
    const [shortname, setShortname] = useState(courseTitle);
    const [longname, setLongname] = useState(courseDescription);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = { shortname, longname };

        try {
            await editCourse(courseId, data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error editando el curso:', error);
        }
    };

    useEffect(() => {
        setShortname(courseTitle);
        setLongname(courseDescription);
    }, [courseTitle, courseDescription]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 backdrop-blur-md bg-black/80 transition-opacity" aria-hidden="true"></div>
            <div className="flex flex-col gap-8 relative bg-white rounded-lg max-w-md p-6 shadow w-96">
                <div className="flex flex-col items-center border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold">Actualizar Curso &quot;{courseTitle}&quot;</h2>
                </div>
                <form onSubmit={handleUpdate} className="gap-5 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="shortname" className="font-semibold">Nombre de curso</label>
                        <input 
                            type="text" 
                            id="shortname" 
                            value={shortname}
                            onChange={(e) => setShortname(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                            placeholder="Nombre del curso" 
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="longname" className="font-semibold">Descripción de curso</label>
                        <input 
                            type="text" 
                            id="longname" 
                            value={longname} 
                            onChange={(e) => setLongname(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                            placeholder="Descripción del curso" 
                            required 
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"  // Cambiado a tipo submit
                            className="px-4 py-2 text-white rounded bg-teal-600 hover:bg-teal-500 mr-2 font-semibold transition-all ease-in-out duration-300">Actualizar</button>
                        <button
                            type="button"  // Añadido tipo button
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 font-semibold transition-all ease-in-out duration-200">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCourseModal;