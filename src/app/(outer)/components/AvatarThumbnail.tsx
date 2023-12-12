import clsx from 'clsx'
import React from 'react'

interface AvatarThumbnailProps {
  pictureArray: {img:string, id: string}[]
  imgStyle: string
}
export const AvatarThumbnail = ({ pictureArray, imgStyle }:AvatarThumbnailProps) => {
  return (
    <div className='flex items-center'>
      {pictureArray.map((image, index) => {
        return (
          <div
            key={image.id}
            className={clsx('border-1 overflow-hidden w-fit h-fit border-gray-50 rounded-full', index > 0 && '-ml-4')}
          >
            <img src={image.img} alt="" className={clsx('', imgStyle)}/>
          </div>
        )
      })}
    </div>
  )
}
