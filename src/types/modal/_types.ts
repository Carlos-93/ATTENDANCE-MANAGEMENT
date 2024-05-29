export interface DeleteCourseModalProps {
    courseTitle: string;
    courseId: number;
    isOpen: boolean;
    onClose: () => void;
}

export interface UpdateCourseModalProps extends DeleteCourseModalProps {
    courseDescription: string;
}