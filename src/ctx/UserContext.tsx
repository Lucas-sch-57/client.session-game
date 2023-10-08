import { UserProviderState } from "@/types";
import { createContext } from "react";

const initialValue: UserProviderState = {
    user: null,
    login: () => null,
    logout: () => null,
    register: () => null,
}

export const UserContext = createContext<UserProviderState>(initialValue);
