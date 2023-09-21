import useUser from '@/hooks/useUser'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    const { logout } = useUser();
    logout();
    return <Navigate to="/login" replace />
}

export default Logout