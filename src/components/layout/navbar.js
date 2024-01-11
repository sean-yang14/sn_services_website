"use client"
import { Fragment, useState } from 'react'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({page}) {
  
  return (
    <header className={classNames(page === 'main' ? 'bg-primary' : 'bg-white border-b-[1px] border-slate-300', '')}>
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-2 lg:px-8 py-2 lg:py-3" aria-label="Global">
        {/* logo */}
        <div>
          <a href="/">
            {/* May want the logo to be an image */}
            <span className="sr-only">Scrub Network</span>
            <div className='flex flex-shrink-0 items-center'>
              {/* <h1 className='text-2xl text-logo font-bold font-serif'>
                Scrub Network
              </h1> */}
              <div>
                <Image
                  src="/logo2.png"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
