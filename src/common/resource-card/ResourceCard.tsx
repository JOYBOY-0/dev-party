import { CategoryTheme } from '@/theme/CategoryTheme'
import React, { FC } from 'react'
import { Resource } from '../../models'
interface Props extends Partial<Resource> {
  children?: React.ReactNode
}

export const ResourceCard: FC<Props> = ({
  category,
  ...props
}) => {

  const Icon = CategoryTheme[category]?.icon
  return (
    <article
      style={{
        borderColor:
          category !== null
            ? CategoryTheme[category].backgroundColor
            : 'gray',
        backgroundColor: 
          category !== null
            ? CategoryTheme[category].backgroundColor
            : 'gray',
      }}
      className='rounded-xl min-w-[280px] max-w-xs shadow-sm 
      relative flex flex-col overflow-hidden 
      border-[4px]'
    >
      <picture
        className='relative w-full h-40 overflow-hidden'
      >
        <img
          src={props.image}
          alt={props.imageAlt}
          className='block w-full h-full object-cover'
        />

      {category !== null &&
        <div 
        style={{
          backgroundColor: CategoryTheme[category].backgroundColor
        }}
        className={`absolute top-2 right-2 
         p-1 w-10 h-10 rounded-full`}>
          <Icon 
            fill={CategoryTheme[category].textColor}
            style={{
              color: CategoryTheme[category].textColor
            }}
          
          />
        </div>
      }

      </picture>
      
      
      <div className='bg-slate-800 p-4 text-gray-300'>
        <h3 className='text-white font-bold text-2xl'>{props.name}</h3>
        <p className='font-extralight'>
          BY
          <span
            style={{
              color: CategoryTheme[category]?.backgroundColor || 'gray'
            }}
            className='font-bold ml-2'
          >
            {props.company}
          </span>
        </p>
        <p className='font-secondary text-sm mt-2 h-16'>
          {props.description}
          </p>
        <div className='flex justify-between gap-2 mt-4 items-center'>
          <div className='flex flex-wrap items-start gap-2 h-16'>
            {props.tags &&
              props.tags!.map(tag => 
              <span
                className='p-1 px-3 rounded-full text-sm'
                style={{
                  backgroundColor: CategoryTheme[category]?.backgroundColor || 'gray',
                  color: CategoryTheme[category]?.textColor || 'white'
                }}
                key={tag.id}>{tag.name}
              </span>)}
              {props.tags && props.tags.length > 1 &&
                <button className='flex items-center justify-center w-7 h-7 bg-slate-900 rounded-full'>
                  +
                </button>
              }
          </div>
          
        </div>
      </div>
    </article>
  )
}
