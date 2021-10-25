import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'

export const Header: NextPage = ({ children }) => {
  return (
    <div className="h-screen bg-custom-primary ">
      <div className="w-full h-16 bg-custom-light">
        <div className="h-14 bg-custom-dark">
          <div className="flex justify-between">
            <div className="ml-48 h-9">
              <Image src="/assets/logo-classi.svg" width="70" height="90" />
            </div>
            <div className="mr-48">
              <Image src="/assets/menu.svg" width="30" height="50" />
            </div>
          </div>
          <div className="mt-2 bg-white mx-40">{children}</div>
        </div>
      </div>
    </div>
  )
}
