import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'


const ModalPortal = ({ children }) => {
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

export default ModalPortal