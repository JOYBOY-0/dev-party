import React, { FC } from 'react'

type Props = {
    children? : React.ReactNode,
    className?: string
}

export const Layout : FC<Props> = (props) => {
  return (
    <div 
        className={`flex justify-center items-center
        w-screen min-h-screen
        m-auto max-h-screen max-w-[100vw]
        overflow-hidden ${props.className}`}
    >
    {props.children}
  </div>
  )
}
