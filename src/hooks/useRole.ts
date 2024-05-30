import { useFetchUser } from './useFetchUser';

export function useIsAdmin() {
    const user = useFetchUser();
    return user?.role === 'admin';
}

export function useIsTeacher() {
    const user = useFetchUser();
    return user?.role === 'teacher';
}

export function useIsStudent() {
    const user = useFetchUser();
    return user?.role === 'student';
}