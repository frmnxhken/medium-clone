import React, { useEffect } from 'react'

const Overlay = (props) => {
    useEffect(() => {
        if(props.status) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [props.status])
  return (
    <div className={`${props.status ? 'fixed' : 'hidden'} top-0 right-0 bottom-0 w-full min-h-screen bg-black/40`}>
        {props.children}
    </div>
  )
}

export default Overlay