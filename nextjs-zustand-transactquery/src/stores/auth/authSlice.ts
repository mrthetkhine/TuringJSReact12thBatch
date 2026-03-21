import {LoginRequest, Todo} from "@/lib/types";
import {TodoSlice, TodoState} from "@/stores/todo/todoSlice";
import {StateCreator} from "zustand/index";
import {MyState} from "@/stores/useBoundStore";
import {BASE_URL} from "@/lib/Config";
import {queryClient} from "@/lib/hooks/queryClient";

export interface AuthState
{
    token: string;
}
export interface AuthAction
{
    login: (user:LoginRequest)=>Promise<any>;
    logout: () => void;
}
export type AuthSlice = AuthState & AuthAction;
const initialState: AuthState = {
    token:'',
}
export const createAuthSlice:StateCreator<
    MyState,
    [['zustand/devtools', never]],
    [],
    AuthSlice
> = (set)=>({
        ...initialState,
        login: async (user:LoginRequest)=>{
            console.log('Fetch todos');
            let response = await  fetch(BASE_URL+`users/login`,{
                method: 'POST',
                body:JSON.stringify(user),
                headers:{"Content-Type":"application/json"}
            });
            let json = await response.json();
            console.log('auth request ',json);
            if(json.token)
            {
                set( (state: AuthState) =>{
                    state.token = json.token;
                    return state;
                });
            }
            else
            {
                throw new Error(json.message);
            }


        },
        logout:()=>set( (state: AuthState) => {
            state.token = '';
            queryClient.clear();
            return state;
        },undefined,'auth/logout'),


    }
);