import { useEffect, useState } from 'react';
import { User } from '@/types/user/_types';

export function useFetchUser() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('/api/user/userSession');
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, []);
    
    return user;
}