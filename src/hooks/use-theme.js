import { useLayoutEffect, useState } from "react"

export const useTheme = (mode)=> {
    const [theme,setTheme] = useState(mode)
    useLayoutEffect(() =>{
     document.documentElement.setAttribute('data-theme', theme)
     localStorage.setItem('app-theme', theme)
    },[theme])

    return {theme,setTheme}
}

// localStorage.getItem('app-theme') || 