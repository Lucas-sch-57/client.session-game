import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import useUser from '@/hooks/useUser'
const AuthGuard = ({ children }: PropsWithChildren) => {
    const { user } = useUser();
    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}


export default AuthGuard