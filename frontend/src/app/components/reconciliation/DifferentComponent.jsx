'use client';

import Counter from "@/app/components/reconciliation/Counter";
import {useState} from "react";

export default function DifferentComponent()
{
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            {isPaused ? (
                <p>See you later!</p>
            ) : (
                <Counter />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={e => {
                        setIsPaused(e.target.checked)
                    }}
                />
                Take a break
            </label>
        </div>
    );
}
