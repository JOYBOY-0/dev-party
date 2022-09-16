import React, { FC } from 'react'
type Props = {
    children? : React.ReactNode,
    className?: string,
    color? : string,
    pattern? : string,
}

export const Layout : FC<Props> = ({
  className, color = "#0f172a", pattern, ...props
}) => {

  const bgPattern = "/svg/bg_pattern_slate_800.svg"
  return (
    <div 
      style={{
        background: `url(${bgPattern}), ${color}`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
        backgroundSize: 'clamp(300px, 15vw , 400px)'
      }}
      className={`flex
      w-full min-h-screen pt-24
       max-w-[100vw] `}
    > 
      <div className={`w-full h-full mx-auto max-w-[1400px] px-6 ${className}`}>
        {props.children}
      </div>
  </div>
  )
}
