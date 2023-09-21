import Loginform from "@/components/LoginForm";
import useUser from "@/hooks/useUser";
import { Navigate } from "react-router-dom";
const Login = () => {
    const { user } = useUser();
    if (user) {
        return <Navigate to="/" />
    }

    return (
        <div className="text-white flex flex-col justify-start h-full gap-20 items-center xl:w-[70%] mx-auto">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-center">Login</h1>
            <Loginform />
        </div>
    )
}

export default Login;