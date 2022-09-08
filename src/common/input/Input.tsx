import React, { AllHTMLAttributes, FC } from 'react'

interface Props extends AllHTMLAttributes<HTMLInputElement> {
    label?: string,
    tag?: boolean,
    placeholder?: string,
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input : FC<Props> = ({
    label,
    tag,
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    disabled,
    className,
    children,
    ...props
}) => {

  return (
    <div className='flex flex-col-reverse items-start font-primary group w-full max-w-xs relative'>

        <input 
        className={`w-full p-2 
        text-slate-100 placeholder:text-slate-400
        rounded-md shadow-inner bg-slate-600 peer
        focus:outline-none ring-2 ring-slate-500 focus:ring-devPink-600
        ${className}`}
        id={id}
        name={name ? name : id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
        />
        {children}
        {label && 
        <label
            htmlFor={id}
            className={`${tag ? "ml-4 peer-focus:bg-devPink-600 bg-slate-500 rounded-t-lg px-4" : "mb-1.5" } 
            py-1 text-white uppercase `}
        >
            {label}
        </label>}
  </div>
  )
}
