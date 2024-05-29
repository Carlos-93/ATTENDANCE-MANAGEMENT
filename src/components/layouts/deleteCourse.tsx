import { deleteCourse } from '@/services/course';
import { DeleteCourseModalProps } from '@/types/modal/_types';

const DeleteCourseModal: React.FC<DeleteCourseModalProps> = ({ courseTitle, courseId, isOpen, onClose }) => {
    async function handleDelete() {
        // Función donde llamamos al servicio para eliminar el curso
        try {
            await deleteCourse(courseId);
            onClose();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 backdrop-blur-md bg-black/50 transition-opacity" aria-hidden="true"></div>
            <div className="relative bg-white rounded-lg max-w-md p-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-lg font-semibold">Eliminar Curso &quot;{courseTitle}&quot;</h2>
                </div>
                <div className="mb-6">
                    <p className="text-gray-700">
                        ¿Estás seguro de que deseas eliminar este curso?
                        <br />
                        Esta acción no se podrá deshacer
                    </p>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 mr-2 font-medium transition-all ease-in-out duration-300">Eliminar</button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 font-medium transition-all ease-in-out duration-300">Cancelar</button>
                </div>
            </div>
        </div>
    );
};
export default DeleteCourseModal;