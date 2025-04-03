import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLayout =()=>{
    const router = useRouter(); 
    const { pathname} = router;
    


    useEffect(()=>{
console.log(pathname,"pathname")
    },[])
    return {
        pathname
    }
}
