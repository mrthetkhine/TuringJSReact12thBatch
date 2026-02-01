'use client';

import {useState} from "react";
import Counter from "@/app/components/reconciliation/Counter";
import TimerDemo2 from "@/app/components/effect/TimerDemo2";

export default function CleanUpDemo()
{
    const [showB, setShowB] = useState(true);
    return(<div>

        {showB && <TimerDemo2 />}
        <label>
            <input
                type="checkbox"
                checked={showB}
                onChange={e => {
                    setShowB(e.target.checked)
                }}
            />
            Render the timer
        </label>
    </div>);
}