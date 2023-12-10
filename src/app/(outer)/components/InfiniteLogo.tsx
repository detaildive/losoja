interface InfiniteLogoProp {
  imgArray: string[]
}
export const InfiniteLogo = ({ imgArray }: InfiniteLogoProp) => {
  return (
    <div className=" border-t border-t-gray-650 flex items-center overflow-hidden container">
      <div className=" flex item-center justify-between">
        <div className="flex items-center justify-center ribbon">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center ribbon">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center ribbon">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const InfiniteLogoInverse = ({ imgArray }: InfiniteLogoProp) => {
  return (
    <div className=" border-t border-t-gray-650 flex items-center overflow-hidden container">
      <div className=" flex item-center justify-between">
        <div className="flex items-center justify-center logo-ribbon-inverse">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center logo-ribbon-inverse">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center logo-ribbon-inverse">
          {imgArray.map((image, index) => {
            return (
              <div
                key={index}
                className="h-[160px] justify-center px-[50px] flex items-center border-r border-r-gray-650"
              >
                <img src={image} alt="" className="h-[30px] max-w-[150px]" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
