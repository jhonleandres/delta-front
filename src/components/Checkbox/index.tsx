import React from 'react'
import type { NextPage } from 'next'

interface IPropsCheckbox {
  name: string
  description: string
  checked?: any
  onChange?: any
  value?: any
}

export const Checkbox: NextPage<IPropsCheckbox> = (
  { name, description },
  props,
) => {
  return (
    <label className="inline-flex items-center ml-1">
      <input
        name={name}
        id={name}
        type="checkbox"
        className="form-checkbox h-5 w-5 text-gray-600"
        {...props}
      />
      <span className="ml-2 text-gray-700">{description}</span>
    </label>
  )
}
