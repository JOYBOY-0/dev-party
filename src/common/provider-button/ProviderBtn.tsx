import React, { FC } from 'react'

type Props = {
  children: React.ReactNode,
  onClick: () => void,
  backgroundColor: string,
}

export const ProviderBtn: FC<Props> = (props) => {
  return (
    <button onClick={props.onClick}
      className={`w-[30%] 
    bg-[${props.backgroundColor}] rounded-lg shadow
    transition-all duration-300 ease-in-out 
    cursor-pointer hover:shadow-lg`}
    >
      <img className='w-full h-full p-3' src="/icons/Discord_Logo.svg" alt='Login with google' />
    </button>
  )
}

export default ProviderBtn