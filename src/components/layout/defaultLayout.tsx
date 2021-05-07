import RrFooter from 'components/organism/RrFooter'
import RrHeader from 'components/organism/RrHeader'
import React, { FC } from 'react'

const DefaultLayout: FC = ({ children }) => {
  console.log(children)

  return (
    <>
      <RrHeader />
      {children}
      <RrFooter />
    </>
  )
}

export default DefaultLayout
