import { UserContext } from '../ctx/UserContext';
import { useState } from 'react';
import { UserProviderProps, UserLogin, User, UserProviderState } from '@/types';
const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>(() => {
        const storage = localStorage.getItem('user');
        if (storage) return JSON.parse(storage);
        return null;
    });

    const login = async (user: UserLogin) => {
        await fetch('http://127.0.0.1:3333/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('user', JSON.stringify(data.token));
                setUser(data);
            }
        })
    }

    const value: UserProviderState = {
        user,
        login: (user: UserLogin) => { login(user) },
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;