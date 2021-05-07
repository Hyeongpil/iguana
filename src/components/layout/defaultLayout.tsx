import RrFooter from 'components/organism/RrFooter'
import RrHeader from 'components/organism/RrHeader'
import React, { FC } from 'react'
import styled from 'styled-components'

const DefaultLayout: FC = ({ children }) => {
  console.log(children)

  return (
    <>
      <RrHeader />
      <BodyWrapper>{children}</BodyWrapper>
      <RrFooter />
    </>
  )
}

export default DefaultLayout

const BodyWrapper = styled.div`
  min-height: calc(100vh - 360px);
`
