import { UserContext } from '../ctx/UserContext';
import { useState } from 'react';
import { UserProviderProps, UserLogin, User, UserProviderState, UserRegister } from '@/types';
const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(() => {
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

    const register = async (user: UserRegister) => {
        await fetch('http://localhost:127.0.0.1:3333/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    const value: UserProviderState = {
        user,
        login: (user: UserLogin) => { login(user) },
        logout: () => { logout() },
        register: (user: UserRegister) => { register(user) },
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;