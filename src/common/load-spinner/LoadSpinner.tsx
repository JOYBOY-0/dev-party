import { ArrowPathIcon } from '@heroicons/react/24/solid'
import React, { FC, ReactElement } from 'react'
import { HTMLAttributes } from 'react'
import './loadSpinner.css'


export const LoadSpinner : FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className="fixed z-[1000] inset-0 flex items-center justify-center
     bg-slate-800/80 backdrop-blur-sm">
      <div className='load-spinner w-20 h-20 mb-2'>
          <div className='w-full h-full bg-slate-600 rounded-full 
          flex items-center justify-center' >
            <ArrowPathIcon className='w-10 h-10 text-slate-200 loadIcon' />
          </div>
      </div>
      {props.children}
    </div>
  )
}
