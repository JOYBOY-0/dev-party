import { CategoryTheme } from '@/theme/CategoryTheme'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type Props = {
    className?: string,
    name?: string,
    theme: number | null,
    onRemove?: () => void,
}

export const TagSpan : FC<Props> = ({
    theme,
    name,
    className,
    onRemove
}) => {
    const defaultTheme = {
        backgroundColor: '#e2e8f0',
        textColor: '#1a202c',
    }

    const styleTheme = theme !== null ? CategoryTheme[theme] : defaultTheme; 

    const spanStyle = {
        backgroundColor: styleTheme.backgroundColor,
        color: styleTheme.textColor,
    }
    
  return (
    <span 
        style={spanStyle}
        className={`flex items-center whitespace-nowrap flex-nowrap font-primary rounded-full py-1.5 px-3 ${className}`}
    >
        {name}
        {onRemove && (
            <button onClick={onRemove} className='ml-2'>
                <XMarkIcon className='h-4 text-white' style={spanStyle} />
            </button>
        )}
    </span>
  )
}
