'use client'

import { Icon } from '@/components'
import clsx from 'clsx'
import React from 'react'

interface FaqProp {
  faqArray: {
    title: string
    answer: string
  }[]
}
export const Faq = ({ faqArray }: FaqProp) => {
  const [activeFaqIndex, setActiveFaqIndex] = React.useState<null | number>(0)
  const handleChangeFaQ = (index: number | null) => {
    if (index === activeFaqIndex) {
      setActiveFaqIndex(null)
    } else {
      setActiveFaqIndex(index)
    }
  }

  return (
    <div className="xl:w-[761px] lg:gap-[50px]">
      <div>
        {faqArray.map((question, index) => {
          return (
            <button
              onClick={() => handleChangeFaQ(index)}
              key={index}
              className={clsx(
                'flex items-start py-8 border-t text-left w-full transition-all origin-bottom overflow-hidden',
                activeFaqIndex == index
                  ? 'border-t-orange_color max-h-[181px]'
                  : 'border-t-gray-150 max-h-[100px]'
              )}
            >
              <div className="flex-1 px-6">
                <p className="font-[700] mb-6">{question.title}</p>
                <p className=" w-full 2xl:w-[479px]">
                  {activeFaqIndex == index && question.answer}
                </p>
              </div>
              <div>
                <div
                  className={clsx(
                    'transition-all duration-300',
                    activeFaqIndex == index
                      ? 'rotate-[45deg] text-orange_color'
                      : 'rotate-0 text-secondary'
                  )}
                >
                  <Icon width="16" height="16" id="add" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
      {/* <div>
        {FAQ2.map((question, index) => {
          return (
            <button
              onClick={() => handleChangeFaQ(index + 3)}
              key={index}
              className="flex items-start py-8 border-b text-left border-b-gray-150 w-full"
            >
              <div className="flex-1 px-6">
                <p className="font-[700] text-[20px] mb-6">{question.title}</p>
                <div className="2xl:w-[571px]">
                  {activeFaqIndex == index + 3 && question.answer}
                </div>
              </div>
              <div>
                <div className="">
                  <p className="">
                    {activeFaqIndex == index + 3 ? (
                      <Add size="22" className="text-primary" />
                    ) : (
                      <Minus size="22" className="text-primary" />
                    )}
                  </p>
                </div>
              </div>
            </button>
          )
        })}
      </div> */}
    </div>
  )
}
