'use client';

import React, {useState} from "react";

export default function FormDemo()
{

    const [text, setText] = useState<string>('');
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const onSubmitHandler = () => {
        console.log('onSubmit ',text);
    }
    return (<form>
        <h2>New Todo form</h2>
        <input type={"text"} value={text} onChange={onChangeHandler} />
        <button onClick={onSubmitHandler} type={"button"}>Submit</button>
    </form>);
}