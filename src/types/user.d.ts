export type UserProviderProps = {
    children: React.ReactNode,
    user: User | null
}

export type UserLogin = {
    email: string
    password: string
}

export type UserRegister = {
    email: string
    name: string
    first_name: string
    password: string
}

export type User = {
    token: string
}

export type UserProviderState = {
    user: User | null,
    login: (user: UserLogin) => Promise<number>,
    logout: () => void,
    register: (user: UserRegister) => Promise<Response>
}
