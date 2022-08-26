import React, { FC } from 'react'
import { Resource } from '../models'
type Props = {
  resource: Resource
  children?: React.ReactNode
}

export const ResourceCard: FC<Props> = ({ resource }) => {
  return (
    <article className='rounded-xl shadow-sm relative flex flex-col overflow-hidden'>
      <img
        src={resource.image}
        alt={resource.imageAlt}
        className='w-full bg-white/20'
      />
      <div className='bg-slate-800 p-4'>
        <h3 className='text-white font-bold text-2xl'>{resource.name}</h3>
        <p className='text-gray-300 font-extralight'>
          BY
          <span className='text-yellow-300 font-bold ml-2'>
            {resource.company}
          </span>
        </p>
        <p>{resource.description}</p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {resource.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
