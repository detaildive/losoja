import React from 'react'

interface CheckboxProps {
  id: string
  checked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-1 items-center space-x-2">
      <input
        className="h-4 w-4 rounded-md"
        type="checkbox"
        onChange={onChange}
        checked={checked}
        name={id}
        id={id}
      />
      <label className="cursor-pointer font-semibold text-sm" htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
