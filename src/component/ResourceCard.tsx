import { CategoryTheme } from '@/theme/CategoryTheme'
import React, { FC } from 'react'
import { Resource } from '../models'
interface Props extends Partial<Resource> {
  children?: React.ReactNode
}

export const ResourceCard: FC<Props> = props => {
  return (
    <article
      style={{
        borderColor:
          props.category !== null
            ? CategoryTheme[props.category].backgroundColor
            : 'gray'
      }}
      className='rounded-xl max-w-xs shadow-sm relative flex flex-col overflow-hidden border-[3px] border-red-500'
    >
      <img
        src={props.image}
        alt={props.imageAlt}
        className='w-full bg-white/20 max-h-40 object-cover min-w-full'
      />
      <div className='bg-slate-800 p-4 text-gray-300'>
        <h3 className='text-white font-bold text-2xl'>{props.name}</h3>
        <p className='font-extralight'>
          BY
          <span
            style={{
              color: CategoryTheme[props.category]?.backgroundColor || 'gray'
            }}
            className='font-bold ml-2'
          >
            {props.company}
          </span>
        </p>
        <p className=' font-extralight text-sm mt-2'>{props.description}</p>
        <div className='flex justify-between gap-2 mt-4 items-center'>
          {/* {resource.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))} */}
          <div className='flex flex-wrap items-center gap-2'>
            {props.tags &&
              props.tags!.map(tag => <span key={tag.id}>{tag.name}</span>)}
          </div>
          <div className='flex flex-col items-center'>
            <button className='flex items-center justify-center h-12 w-12 bg-slate-900 rounded-full'>
              +
            </button>
            <p>3 More</p>
          </div>
        </div>
      </div>
    </article>
  )
}
