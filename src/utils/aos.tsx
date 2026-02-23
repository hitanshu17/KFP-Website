'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            // Animate elements only once when they first come into view
            once: true,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
