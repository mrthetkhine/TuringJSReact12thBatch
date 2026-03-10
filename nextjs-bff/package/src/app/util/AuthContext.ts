import {createContext} from "react";

interface AuthContextType{
    authenticated:boolean;
}
export const AuthContext = createContext<AuthContextType>({
    authenticated:false,
});