// Inspired by: https://benadam.me/thoughts/react-svg-sprites/

import * as React from 'react'

interface IconProps {
  id: string
  className?: string
  width: string
  height: string
  color?: string
}

// eslint-disable-next-line react/display-name
export const Icon: React.FunctionComponent<IconProps> = React.forwardRef(
  (props) => {

    const { id, className, height, width, color } = props
    return (
      <svg className={className} width={width} height={height} fill={color}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    )
  }
)
