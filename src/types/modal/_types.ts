export interface DeleteCourseModalProps {
    courseTitle: string;
    courseId: number;
    isOpen: boolean;
    onClose: () => void;
}