'use client'
import { useForm } from 'react-hook-form'
import React from 'react'

import { Button, Icon, InputField } from '@/components'
import clsx from 'clsx'
import Link from 'next/link'
import { InfiniteRibbon2 } from '@/app/(outer)/components'

export const Footer = () => {
  const SOCIAL_LINKS = [
    {
      icon: <Icon id="instagram" height="60" width="60" />,
      id: '1',
      link: '#',
    },
    {
      icon: <Icon id="x" height="42" width="45" />,
      id: '2',
      link: '#',
    },
    {
      icon: <Icon id="black-envelope" height="60" width="60" color="#00000" />,
      id: '3',
      link: '#',
    },
  ]
  const { register } = useForm()
  return (
    <footer className="bg-gray xl:h-[429px] pt-[40px] xl:pb-[50px] bg-gray-170">
      <div className="container flex-col xl:flex-row flex items-start justify-between">
        <div className="sm:h-[493px] sm:w-[407px] -mt-[154px] px-[44px] py-[31px] rounded-[30px] bg-secondary">
          <Icon height="45" width="45" id="envelope" />
          <h3 className="text-head-75 mt-4 mb-2 text-gray-450">Subscribe to</h3>
          <h3 className="leading-[50px] text-head-100 sm:text-head-200 text-gray-50">
            Our <br /> NewsLetter
          </h3>
          <p className="text-sm text-gray-450 mt-4">
            Stay up to date on market prices and related news when you sign up
            to our newsletter.
          </p>
          <InputField
            className="bg-transparent mt-6 mb-4 placeholder:text-gray-450 border-gray-650 rounded-[10px]"
            hasError={undefined}
            placeholder="Enter your email"
            registration={{ ...register('emailNewsLetter') }}
          />
          <Button className="w-full">Subscribe</Button>

          <p className="text-sm text-gray-450 mt-4">
            Don&apos;t worry about spam we hate it too
          </p>
        </div>
        <div>
          <h3 className="text-head-200">Follow us</h3>
          <div className="flex items-center gap-6 lg:gap-12 mt-2 flex-wrap lg:flex-nowrap">
            {SOCIAL_LINKS.map((link, index) => {
              return (
                <div
                  key={link.id}
                  className={clsx(
                    'md:w-[208px] md:min-w-[208px] h-[100px] w-[100px] md:h-[208px] rounded-[10px] md:rounded-[30px] flex items-center justify-center',
                    index === 0
                      ? 'bg-pink_color'
                      : index === 1
                      ? 'bg-black_color'
                      : 'bg-gray-50'
                  )}
                >
                  {link.icon}
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between mt-6">
            <p className="text-sm ">
              Lósójá <span className="text-gray-450">by</span>{' '}
              <span className="text-orange_color">Detail Dive </span>
              <span className='text-gray-450'>© 2023. All rights reserved.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <InfiniteRibbon2 />
      </div>
    </footer>
  )
}
