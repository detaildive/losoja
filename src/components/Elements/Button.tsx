import { Loader } from './Loader'
import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'backdrop' | 'none' | 'secondary'
  className?: string
  children: React.ReactNode
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  isLoading = false,
  type = 'button',
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'rounded-[10px] justify-center font-[600] whitespace-nowrap h-[50px] focus:outline-none disabled:cursor-not-allowed gap-2 disabled:opacity-70 cursor-pointer text-sm flex items-center gap transition-colors duration-100',
        variant === 'primary' &&
          'bg-primary py-3 px-8 font-[600] text-white hover:bg-dark_orange',
        variant === 'outline' &&
          'px-8 py-3 flex items-center border justify-center',
        variant === 'secondary' && 'bg-secondary py-3 px-8 font-[600] ',
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading && <Loader size="md" className="text-current" />}
      {children}
    </button>
  )
}
