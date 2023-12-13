'use client'
import React from 'react'
import { Control } from 'react-hook-form'
import clsx from 'clsx'

import { Button, Icon, InputField, InputFieldPhoneNo } from '@/components'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const Page = () => {
  const ALTERNATIVE_SIGN_UP_OPTIONS = [
    {
      id: 1,
      logo: 'x',
      size: '25',
    },
    {
      id: 2,
      logo: 'google',
      size: '32',
    },
    {
      id: 3,
      logo: 'apple',
      size: '32',
    },
  ]

  const { register, control, watch } = useForm()
  const phone = watch('phone')

  return (
    <div className="w-screen h-screen bg-gray-50">
      <div className="container grid justify-center xl:gap-0 lg:grid-cols-10 items-center h-full">
        <div className="sm:w-[416px] col-span-5 xl:col-span-4">
          <div className="">
            <img
              src="/assets/home/losoja-logo.svg"
              alt=""
              className="w-[92px] h-[30px]"
            />
          </div>
          <div>
            <h4 className="text-head-75 mt-8 font-[600]">
              Experience a{' '}
              <span className="text-primary">new way of shopping</span>.
              Simplify your life, and reclaim your time.
            </h4>
            <p className="text-sm mt-6 sm:w-[395px] text-gray-550">
              Join our <strong>200+</strong> companies and individuals. Lets us
              simplify your life by taking care of your shopping needs and
              errands.
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center mt-[50px]">
            {ALTERNATIVE_SIGN_UP_OPTIONS.map((option, index) => {
              return (
                <button
                  key={option.id}
                  className={clsx(
                    'min-w-[50px] w-[50px] perfect-circle h-[50px] min-h-[50px]',
                    index === 0
                      ? 'bg-black_color'
                      : index === 1
                      ? 'bg-[#477BFF]'
                      : ' border'
                  )}
                >
                  {/* <img src={option.logo} alt="img" /> */}
                  <Icon
                    width={option.size}
                    height={option.size}
                    id={option.logo}
                  />
                </button>
              )
            })}
          </div>
          <div className="flex items-center mt-8 sm:w-[357px] mx-auto">
            <div className="border-t w-full h-[1px] " />
            <p className="min-w-[40px] text-sm flex items-center justify-center bg-gray-50">
              Or
            </p>
            <div className="border-t w-full h-[1px]" />
          </div>
          <form className="mt-8">
            <div className="">
              <InputField
                isRequired
                className="bg-transparent mb-4"
                label="First Name"
                hasError={undefined}
                placeholder="First Name"
                registration={{ ...register('firstName') }}
              />
            </div>
            <div className="">
              <InputField
                isRequired
                className=" mb-4"
                label="Last Name"
                hasError={undefined}
                placeholder="Last Name"
                registration={{ ...register('lastName') }}
              />
            </div>
            <div className="">
              <InputField
                isRequired
                className=" mb-4"
                label="Email"
                hasError={undefined}
                placeholder="email"
                registration={{ ...register('email') }}
              />
            </div>
            <div className="flex-1 ">
              <InputFieldPhoneNo
                className="outline-none"
                control={control as unknown as Control}
                label="Phone"
                defaultValue={phone}
                name="phone"
                hasError={undefined}
                // errorMessage={errors.phone?.message}
                isRequired
              />
            </div>
            <Button className="w-full mt-4">Start Journey</Button>
            <p className="text-sm text-gray-550 text-center mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-primary">
                Login here!
              </Link>
            </p>
          </form>
        </div>
        <div className="col-span-5 xl:col-span-6 pl-4 xl:pl-0 hidden lg:block">
          <div className="relative">
            <div className="absolute w-[230px] h-[177px] rounded-[15px] top-0 right-0 bg-black p-5 overflow-hidden">
              <h3 className="text-white text-head-75">
                Shopping as a business?
              </h3>
              <p className="text-sm text-gray-550 mt-1">
                Get started with us as a business owner or manager!
              </p>
              <div className="rounded-tl-[15px] px-6 py-2 text-white text-xs bg-primary w-fit absolute bottom-0 right-0">
                Start Now!
              </div>
            </div>
            <img
              src="/assets/auth/fruitMarket1.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
