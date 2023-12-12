'use client'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import * as React from 'react'
import clsx from 'clsx'
import { Label } from '../Elements/Label'

interface TextAreaFieldProps {
  id: string
  placeholder?: string
  autoFocus?: boolean
  isRequired?: boolean
  registration: Partial<UseFormRegisterReturn>
  hasError: FieldError | undefined
  className?: string
  label?: string
  rows?: number
  limit?: number | null
  value?: string
  canPressSpace?: boolean
}

export const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  id,
  placeholder,
  autoFocus = false,
  registration,
  className,
  rows = 5,
  hasError,
  limit = 500,
  value,
  label,
  isRequired,
  canPressSpace = true,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (e: any) => {
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  const { name } = registration
  return (
    <div>
      {!!label && (
        <Label htmlFor={name} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <textarea
        name={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={rows}
        onKeyDown={canPressSpace ? undefined : handleKeyDown}
        className={clsx(
          'w-full py-4 rounded-md border border-gray-250 bg-white bg-transparent px-4 font-WorkSans outline-none placeholder:text-sm placeholder:text-gray-250 focus-within:border-secondary disabled:bg-gray-100',
          hasError && 'border-red-500',
          className
        )}
        {...registration}
        maxLength={limit ? limit : undefined}
      />
      {limit && (
        <div className="mt-2 flex justify-between text-xs">
          <p className="text-gray-250">Max. {limit} characters</p>
          <p className="text-info-100">
            {value?.length || 0} / {limit}
          </p>
        </div>
      )}
    </div>
  )
}
