'use client';
import {useEffect, useRef, useState} from "react";

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(()=>{
       console.log('useEffect fired');
        if (isPlaying) {
            ref.current.play();  // Calling these while rendering isn't allowed.
        } else {
            ref.current.pause(); // Also, this crashes.
        }
    });
    /*
   */
    console.log('Render ',ref.current);
    return <video ref={ref} src={src} loop playsInline />;
}
export default function EffectDemo()
{
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}