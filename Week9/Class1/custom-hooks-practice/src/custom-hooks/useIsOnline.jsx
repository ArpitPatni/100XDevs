import { useEffect, useState } from "react";

export default function useIsOnline(){
    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        const online=window.addEventListener('online',()=>{
            setIsOnline(true);
        })

        const offline=window.addEventListener('offline',()=>{
            setIsOnline(false);
        })
        return ()=>{
            removeEventListener(online)
            removeEventListener(offline)
        }
    },[])
    return { isOnline };
}