import { Button } from '@/components'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-secondary flex items-center justify-center h-screen">
      <div className="w-[498px] text-center flex items-center justify-center flex-col border border-gray-650 border-opacity-20 rounded-[10px] pb-10">
        <div className="pt-10 border-t-4 border-t-primary rounded-[10px] w-full">
          <img
            src="/assets/auth/logoWhite.svg"
            alt="logo"
            className="w-[92px] h-[30px] mx-auto"
          />
        </div>
        <img
          src="/assets/auth/orange-check.svg"
          alt="check"
          className="mt-14"
        />
        <h3 className="text-head-75 text-white mt-8">Welcome</h3>
        <p className="text-head-75 text-gray-550 text-sm">
          And this is your unique ID
        </p>
        <p className="text-gray-50 bg-gray-650 border h-[60px] border-gray-550  mt-6 border-opacity-50 text-[20px] w-[229px] items-center justify-center flex rounded-[10px]">
          67KA441SLK
        </p>
        <p className="text-head-75  text-gray-550 text-sm my-8">
          This code should be kept securely as your unique ID will be requested
          for whenever you try to login.
        </p>
        <Button className="w-[80%]">Got it!</Button>
		<a href="" className='text-[#4270E5] text-xs mt-14'>learn more about Web 5 and DIDs</a>
      </div>
    </div>
  )
}

export default Page
