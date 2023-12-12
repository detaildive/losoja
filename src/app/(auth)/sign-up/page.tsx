'use client'
import { Icon, InputField } from '@/components'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

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

  const { register } = useForm()

  return (
    <div className="w-screen h-screen bg-gray-50">
      <div className="container">
        <div className="w-[416px]">
          <div className="">
            <img
              src="/assets/home/losoja-logo.svg"
              alt=""
              className="w-[92px] h-[30px]"
            />
          </div>

          <div>
            <h4 className="text-head-75 mt-10 font-[600]">
              Experience a{' '}
              <span className="text-primary">new way of shopping</span>.
              Simplify your life, and reclaim your time.
            </h4>
            <p className="text-sm mt-8 w-[395px] text-gray-550">
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
                      : 'bg-transparent border'
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
          <div className="flex items-center mt-8 w-[357px] mx-auto">
            <div className="border-t w-full h-[1px] " />
            <p className="min-w-[40px] text-sm flex items-center justify-center bg-gray-50">
              Or
            </p>
            <div className="border-t w-full h-[1px]" />
          </div>

          <div>
            <InputField
              className="bg-transparent mt-6 mb-4 placeholder:text-gray-450 border-gray-650 rounded-[10px]"
              hasError={undefined}
              placeholder="First Name"
              registration={{ ...register('firstName') }}
            />
          </div>
          <div>
            <InputField
              className="bg-transparent mt-6 mb-4 placeholder:text-gray-450 border-gray-650 rounded-[10px]"
              hasError={undefined}
              placeholder="Last Name"
              registration={{ ...register('lastName') }}
            />
          </div>
          <div>
            <InputField
              className="bg-transparent mt-6 mb-4 placeholder:text-gray-450 border-gray-650 rounded-[10px]"
              hasError={undefined}
              placeholder="email"
              registration={{ ...register('email') }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
