export interface DeleteCourseModalProps {
    courseShortname: string;
    courseId: number;
    isOpen: boolean;
    onClose: () => void;
}

export interface UpdateCourseModalProps extends DeleteCourseModalProps {
    courseLongname: string;
}