import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'

export const Button: NextPage = ({ children }) => {
  return (
    <div className="flex justify-center">
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {children}
      </button>
    </div>
  )
}
