'use client';
import {useState} from "react";

export default function LoginForm()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin=()=>{
        console.log('username ',username,'password', password);
    }
    return(<div>
        <div>
            <label>Username</label>
            <input type={"text"}
                   value={username}
                   onChange={handleUserNameChange}/>
        </div>
        <div>
            <label>Password</label>
            <input type={"password"}
                    value={password}
                    onChange={handlePasswordChange}/>
        </div>
        <button type={"button"} onClick={handleLogin}>Login</button>
    </div>);
}