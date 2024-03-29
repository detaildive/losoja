'use client'
import { AnimatedButton } from '@/app/(outer)/components'
import { Icon } from '@/components'
import { useComponentVisible } from '@/hooks'
import clsx from 'clsx'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
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

  const {
    dropDownButtonRef,
    isComponentVisible: openSideNav,
    setIsComponentVisible: setOpenSideNav,
    ref,
  } = useComponentVisible()
  
  return (
    <nav className="sticky  bg-gray-50 top-0 py-5 z-[9999]">
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
            title="Chat wth us"
            icon={<Icon height="24" width="24" id="chat" color="#000" />}
          />
        </div>
      </div>
      <div className="flex lg:hidden items-center w-full py-2 justify-between px-6 bg-gray-50 fixed top-0 pt-5">
        <div className="">
          <img
            src="/assets/home/losoja-logo.svg"
            alt=""
            className="w-[92px] h-[30px]"
          />
        </div>
        <button
          className="top-5 right-5 lg:hidden p-[1px] rounded-md shadow-md bg-primary"
          ref={dropDownButtonRef}
        >
          <Hamburger
            toggled={openSideNav}
            toggle={setOpenSideNav}
            easing="ease-in"
            rounded
            size={20}
            color="#FAFAFA"
            duration={0.3}
          />
        </button>
      </div>
      <div
        ref={ref}
        className={clsx(
          'lg:hidden fixed z-[1000] transition-all ease-in-out duration-300 shadow-2xl overflow-hidden origin-right top-0 left-0 w-[300px] h-screen bg-gray-50',
          openSideNav ? 'w-[300px] opacity-100' : 'w-[0px] opacity-0'
        )}
      >
        <div className="pl-8 mt-8">
          <img
            src="/assets/home/losoja-logo.svg"
            alt=""
            className="w-[92px] h-[30px]"
          />
        </div>
        <div
          className={clsx(
            'flex items-start transition-opacity mt-32 duration-75 flex-col rounded-[10px] justify-center pl-8 gap-[50px] w-fit',
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
    </nav>
  )
}
