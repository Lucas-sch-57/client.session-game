import useUser from "@/hooks/useUser";
import { Link, Navigate } from "react-router-dom";
import registerImg from '@/assets/img/register.png';
import RegisterForm from "@/components/Auth/RegisterForm";
const Register = () => {
    const { user } = useUser();
    if (user) {
        return <Navigate to="/" replace />
    }
    return (
        <div className="flex text-white h-[100vh] w-full">
            <div className="hidden lg:block w-1/2 h-full overflow-hidden relative">
                <img src={registerImg} alt="Image illustrant une inscription" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className="flex flex-col gap-5 p-10 w-full">
                <h1 className="text-center text-xl md:text-2xl">Inscription</h1>
                <RegisterForm />
                <p>Vous possedez déjà un compte ? <Link to={'/login'}>Connectez-vous ici</Link></p>
            </div>

        </div>
    )
}

export default Register;