import RrHeader from 'components/organism/RrHeader'
import React, { FC } from 'react'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <RrHeader />
      {children}
    </>
  )
}

export default DefaultLayout
