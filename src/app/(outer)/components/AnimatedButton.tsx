import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface AnimatedButtonProps {
  link: string
  variant?: 'primary' | 'secondary'
  icon: React.ReactElement
  title: string
}
export const AnimatedButton = ({
  link,
  variant = 'primary',
  icon,
  title,
}: AnimatedButtonProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        'gap-5 h-[50px] relative group transition-all duration-300 overflow-hidden px-5 flex items-center justify-end rounded-[10px] origin-left',
        variant === 'primary' ? 'bg-primary text-white w-[54px] hover:w-[244px]' : 'bg-gray-50 border w-[54px] hover:w-[164px]'
      )}
    >
      <p className="text-sm whitespace-nowrap left-5 absolute opacity-0 right-10 z-[1] transition-opacity delay-100 group-hover:opacity-100 ">
        {title}
      </p>
      <div className={clsx("min-w-[16px] min-h-[16px] w-[54px] items-center justify-center absolute -mr-5 flex z-[10]", variant === 'primary' ? 'bg-primary' : 'bg-gray-50 ')}>{icon}</div>
      
    </Link>
  )
}
