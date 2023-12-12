import React from 'react'
import clsx from 'clsx'

interface InfiniteRibbonProp {
  backgroundColor?: string
  textColor?: string
}

export const InfiniteRibbon = ({
  backgroundColor,
  textColor,
}: InfiniteRibbonProp) => {
  return (
    <div
      className={clsx(
        'relative z-[500] h-[80px] sm:h-[144px] font-normal overflow-hidden rounded-[10px] sm:rounded-[30px] mx-auto text-head-300 sm:text-[128px] leading-[120px] flex items-center w-[80%] xl:w-[998px] '
      )}
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="flex items-center gap-10">
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">Running</h1>
          <h1 className="whitespace-nowrap text-black-state">Errands</h1> 
          <h1 className="whitespace-nowrap text-black-state">Made</h1>
          <h1 className="whitespace-nowrap text-black-state">Easy</h1>
        </div>
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">Running</h1>

          <h1 className="whitespace-nowrap text-black-state">Errands</h1>

          <h1 className="whitespace-nowrap text-black-state">Made</h1>
          <h1 className="whitespace-nowrap text-black-state">Easy</h1>
        </div>
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">Running</h1>

          <h1 className="whitespace-nowrap text-black-state">Errands</h1>

          <h1 className="whitespace-nowrap text-black-state">Made</h1>
          <h1 className="whitespace-nowrap text-black-state">Easy</h1>
        </div>
      </div>
    </div>
  )
}

export const InfiniteRibbon2 = ({
  backgroundColor,
  textColor,
}: InfiniteRibbonProp) => {
  return (
    <div
      className={clsx(
        ' bg-secondary font-normal overflow-hidden  mx-auto text-[128px] text-gray-650 leading-[120px] w-full flex items-center h-[232px]'
      )}
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="flex items-center gap-10">
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">
            Let&apos;s run your shopping errands today
          </h1>
        </div>
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">
            Let&apos;s run your shopping errands today
          </h1>
        </div>
        <div className="flex ribbon items-center gap-6 text-black-state infiniteRibbon">
          <h1 className="whitespace-nowrap text-black-state">
            Let&apos;s run your shopping errands today
          </h1>
        </div>
      </div>
    </div>
  )
}
