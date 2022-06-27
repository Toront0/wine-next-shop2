import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'


const SignIn = ({ children }) => {
     const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#modals"))
      : null
}

export default SignIn