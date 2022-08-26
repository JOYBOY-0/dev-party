import React, { FC } from 'react'
import { Resource } from '../models'
type Props = {
  resource: Resource
  children?: React.ReactNode
}

export const ResourceCard: FC<Props> = ({ resource }) => {
  return (
    <article
      style={{ borderColor: resource.category.color }}
      className='rounded-xl max-w-xs shadow-sm relative flex flex-col overflow-hidden border-[3px] border-red-500'
    >
      <img
        src={resource.image}
        alt={resource.imageAlt}
        className='w-full bg-white/20 max-h-40 object-cover'
      />
      <div className='bg-slate-800 p-4 text-gray-300'>
        <h3 className='text-white font-bold text-2xl'>{resource.name}</h3>
        <p className='font-extralight'>
          BY
          <span className='text-yellow-300 font-bold ml-2'>
            {resource.company}
          </span>
        </p>
        <p className=' font-extralight text-sm mt-2'>{resource.description}</p>
        <div className='flex justify-between gap-2 mt-4 items-center'>
          {/* {resource.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))} */}
          <div className='flex flex-wrap items-center gap-2'>
            {resource.tags.map(tag => (
              <span key={tag.id}>{tag.name}</span>
            ))}
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
