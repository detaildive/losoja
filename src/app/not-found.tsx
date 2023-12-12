import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
      Looks like they have carry you go where you no know{' '}
      <Link href="/" className="text-blue_color">
        Go back home
      </Link>
    </div>
  )
}

export default NotFoundPage
