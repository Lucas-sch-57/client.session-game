import { NavLink } from "react-router-dom"
import { Gamepad2, LogOut } from "lucide-react"
import { LogIn } from "lucide-react"
import { Menu } from "lucide-react"
import { useState } from "react"
import useUser from "@/hooks/useUser"
const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const showMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const { user } = useUser();

    return (
        <>
            <ul className={`${isMenuOpen ? 'flex absolute inset-0' : 'hidden'} lg:flex flex-col text-white lg:w-1/4 bg-secondary-foreground h-[100vh] items-center gap-5 p-10 order-2 lg:order-1 text-md lg:text-lg xl:text-xl`}>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "flex justify-center items-center text-primary gap-2" : "flex justify-center text-white gap-2"
                    }>
                        <Gamepad2 />
                        Vos sessions</NavLink>
                </li>
                <li>
                    <NavLink
                        to={user ? '/logout' : '/login'}
                        className={({ isActive }) => isActive ? "flex justify-center items-center text-primary gap-2" : "flex justify-center items-center text-white gap-2"}
                    >
                        {!user ? (
                            <>
                                <LogIn />
                                Connexion
                            </>
                        ) :
                            <>
                                Déconnexion
                                <LogOut />
                            </>
                        }

                    </NavLink>
                </li>
            </ul>
            <Menu className="lg:hidden absolute top-2 right-2" color="white" size={32} onClick={showMenu} />
        </>

    )
}

export default Sidebar