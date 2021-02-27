import React from 'react'
import styled from 'styled-components'
import { Heart } from 'react-feather'
const RrLike = ({ count }) => {
  return (
    <RrLikeWrapper>
      <Heart size="20" style={{ marginLeft: '20px', cursor: 'pointer' }} />
      <Count>{count}</Count>
    </RrLikeWrapper>
  )
}

export default RrLike

const RrLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Count = styled.div`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-left: 6px;
  margin-right: 6px;
`
