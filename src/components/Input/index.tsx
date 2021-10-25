import React from 'react'
import InputMask from 'react-input-mask'
import type { NextPage } from 'next'

interface IPropsInput {
  label?: string
  name?: string
  placeholder?: string
  type?: string
  maxLength?: string
  onChange?: any
  value?: any
  onClick?: any
  mask?: any
}

export const Input: NextPage<IPropsInput> = (
  { label, name, placeholder, type, mask },
  props,
) => {
  return (
    <div className="mb-2">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
        htmlFor={name}
      >
        {label}
      </label>
      <InputMask
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
        id={name}
        type={type}
        mask={mask}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
