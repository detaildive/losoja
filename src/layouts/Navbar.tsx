'use client'
import { AnimatedButton } from '@/app/(outer)/components'
import { Icon } from '@/components'
import clsx from 'clsx'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  const [openSideNav, setOpenSideNav] = React.useState(false)
  const NAV_LINKS = [
    {
      id: 1,
      name: 'Home',
      path: '#home',
    },
    {
      id: 2,
      name: 'About',
      path: '#about',
    },
    {
      id: 3,
      name: 'Services',
      path: '#services',
    },
    {
      id: 4,
      name: 'Company',
      path: '#company',
    },
    {
      id: 5,
      name: 'FAQ',
      path: '#faq',
    },
  ]
  return (
    <>
      <div className=" items-center justify-between container hidden lg:flex">
        <img
          src="/assets/home/losoja-logo.svg"
          alt=""
          className="w-[92px] h-[30px]"
        />
        <div className="flex items-center rounded-[10px] shadow-custom justify-center p-5 gap-[50px] w-fit">
          {NAV_LINKS.map((link) => (
            <Link href={link.path} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <AnimatedButton
            link="/"
            title="Send us your Shopping List"
            icon={<Icon height="16" width="16" id="arrow-right" />}
          />
          <AnimatedButton
            variant="secondary"
            link="/"
            title="Chat wth"
            icon={<Icon height="24" width="24" id="chat" color="#000" />}
          />
        </div>
      </div>
      <div className="fixed top-5 right-5 lg:hidden">
        <Hamburger
          toggled={openSideNav}
          toggle={setOpenSideNav}
          easing="ease-in"
          rounded
          size={20}
          color="#1b2c19"
          duration={0.3}
        />
      </div>
      <div
        className={clsx(
          'lg:hidden fixed z-[1000] transition-all duration-300 shadow-2xl overflow-hidden origin-right top-0 left-0 w-[300px] h-screen bg-gray-50',
          openSideNav ? 'w-[300px]' : 'w-[0px]'
        )}
      >
        <div className='pl-10 mt-8'>
          <img
            src="/assets/home/losoja-logo.svg"
            alt=""
            className="w-[92px] h-[30px]"
          />
        </div>
        <div
          className={clsx(
            'flex items-start transition-opacity mt-32 duration-75 flex-col rounded-[10px] justify-center pl-10 gap-[50px] w-fit',
            openSideNav ? 'opacity-100' : 'opacity-0'
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link href={link.path} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
