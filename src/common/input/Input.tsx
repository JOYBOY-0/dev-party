import React, { AllHTMLAttributes, FC } from 'react'

interface Props extends AllHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder?: string,
    name?: string,
}

export const Input : FC<Props> = ({
    label,
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    disabled,
    className,
    ...props
}) => {

  return (
    <div className='flex flex-col'>
        {label && 
        <label
        htmlFor={id}
        className='auth_label'
        >
            {label}
        </label>}
        <input 
        className={`w-full p-2 text-slate-100 placeholder:text-slate-400 
        rounded-md shadow-inner bg-slate-600 max-w-xs ${className}`}
        id={id}
        name={name ? name : id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
        />
  </div>
  )
}
