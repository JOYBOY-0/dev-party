import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, {FC} from 'react'

type Props = {
    className?: string,
    name?: string,
    icon?: string,
    onRemove?: () => void,
}

export const TagElement : FC<Props> = ({
    name, 
    icon, 
    onRemove,
}) => {
  return (
    <div className="h-24 w-24 
    flex flex-col items-center justify-center
    rounded-xl
    border-2 border-slate-500
    text-slate-400 bg-slate-700 relative
    transition-colors hover:text-slate-300
     hover:border-slate-400">
      {icon && <img src={icon} alt={name} className='w-9 mb-1 text-inherit'/>}
      <p 
        className={`font-semibold text-sm text-center truncate max-w-[85px]`}
      >
        {name}
      </p>
      {onRemove && 
      <button 
        onClick={onRemove}
        className='flex items-center justify-center
        h-8 w-8 rounded-full bg-red-500 
        hover:bg-red-400
        absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'
      >
        <XMarkIcon className='w-7 text-white'/>
      </button>}
    </div>
  )
}
