import { useFetchUser } from './useFetchUser';

export function useIsAdmin() {
    const user = useFetchUser();
    return user?.role === 'admin';
}