import { ArrowPathIcon } from '@heroicons/react/24/solid'
import React, { FC, ReactElement } from 'react'
import { HTMLAttributes } from 'react'
import { TransitionModal } from '../transition-modal/TransitionModal'
import './loadSpinner.css'

export interface LoadSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  show : boolean
}

export const LoadSpinner : FC<LoadSpinnerProps> = (props) => {

  return (

    <TransitionModal
      show={props.show}
      z='100'
      background='bg-slate-800/80 backdrop-blur-sm flex-col'
    >
      <div className='load-spinner w-20 h-20 mb-2'>
        <div className='w-full h-full bg-slate-600 rounded-full 
        flex items-center justify-center' >
          <ArrowPathIcon className='w-10 h-10 text-slate-200 loadIcon' />
        </div>
      </div>
      {props.children}
    </TransitionModal>
  )
}
