import React, { FC, ReactElement } from 'react'
import { HTMLAttributes } from 'react'
import './LoadSpinner.css'


export const LoadSpinner : FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='load-spinner'>
        <div {...props} />
    </div>
  )
}
