import {useState} from "react";

export default function useCustomForm() {

    const [formData,setFormData] = useState({

    });
    function onInputChange(name)
    {
        return function(event)
        {
            setFormData({
                ...formData,
                [name]: event.target.value,
            })
        }
    }
    function register(name)
    {
        console.log('register');

        return {
            value : formData[name],
            onChange : onInputChange(name),
        }
    }
    function handleSubmit(submitFun)
    {
        return function(event)
        {
            submitFun(formData);
            event.preventDefault();
        }
    }
    return {
        register,
        handleSubmit,
    }
}