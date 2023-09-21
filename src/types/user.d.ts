export type UserProviderProps = {
    children: React.ReactNode,
    user: User | null
}

export type UserLogin = {
    email: string
    password: string
}

export type User = {
    token: string
}

export type UserProviderState = {
    user: User | null,
    login: (user: UserLogin) => void
}