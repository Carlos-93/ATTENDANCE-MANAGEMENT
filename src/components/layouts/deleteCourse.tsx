import { DeleteCourseModalProps } from '@/types/modal/_types';
import { deleteCourse } from '@/services/course';

const DeleteCourseModal: React.FC<DeleteCourseModalProps> = ({ courseShortname, courseId, isOpen, onClose }) => {

    async function handleDelete() {
        // Función donde llamamos al servicio para eliminar el curso en Moodle
        try {
            await deleteCourse(courseId);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 backdrop-blur-md bg-black/80 transition-opacity" aria-hidden="true"></div>
            <div className="flex flex-col relative gap-1 bg-white rounded-lg max-w-md p-6 shadow w-[35rem]">
                <div className="flex justify-center items-center border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold">Eliminación del curso &quot;{courseShortname}&quot;</h2>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                    <p>¿Estás seguro de que deseas eliminar este curso?</p>
                    <p>Esta acción no se podrá deshacer</p>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 text-white rounded bg-red-600 hover:bg-red-500 mr-2 font-semibold transition-all ease-in-out duration-300">Eliminar</button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 font-semibold transition-all ease-in-out duration-300">Cancelar</button>
                </div>
            </div>
        </div >
    );
};
export default DeleteCourseModal;