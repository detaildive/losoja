'use client'
import { useForm } from 'react-hook-form'

import { Button, InputField } from '@/components'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  const { register } = useForm()
  return (
    <div className="w-screen h-screen bg-gray-50">
      <div className="container grid md:grid-cols-2 xl:gap-0 gap-4 items-center h-full">
        <div className="flex items-center justify-center">
          <div className="sm:w-[416px]">
            <div className="">
              <img
                src="/assets/home/losoja-logo.svg"
                alt=""
                className="w-[92px] h-[30px]"
              />
            </div>
            <div>
              <h4 className="text-head-100 mt-12 font-[600]">
                Welcome Back! 👋
              </h4>
              <p className="text-sm sm:w-[364px] text-gray-550">
                Continue from where you left off. Send us your shopping list and
                take some time off to relax.
              </p>
            </div>
            <form className="mt-16">
              <div className="">
                <InputField
                  isRequired
                  className="bg-transparent mb-4"
                  hasError={undefined}
                  placeholder="Enter your unique ID"
                  registration={{ ...register('uniqueId') }}
                />
              </div>
              <Button className="w-full mt-2">Start Journey</Button>
              <p className="text-sm text-gray-550 mt-6">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-primary">
                  Sign up here!
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="relative">
            <div className="absolute w-[190px] h-[180px] rounded-[15px] top-0 right-0 bg-black p-5 overflow-hidden">
              <h3 className="text-white text-head-75">
                Having issues?
              </h3>
              <p className="text-sm text-gray-550 mt-1">
                Chat with our customer care team.
              </p>
              <div className="rounded-tl-[15px] px-6 py-2 text-white text-xs bg-primary w-fit absolute bottom-0 right-0">
                Chat Now!
              </div>
            </div>
            <img src="/assets/auth/loginWallPaper.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
