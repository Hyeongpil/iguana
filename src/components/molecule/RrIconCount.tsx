import React from 'react'
import styled from 'styled-components'

const RrIconCount = ({ imgName, count }) => {
  return (
    <RrLikeWrapper>
      <IconImg src={process.env.PUBLIC_URL + `/image/${imgName}.png`} />
      <Count>{count}</Count>
    </RrLikeWrapper>
  )
}

export default RrIconCount

const RrLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const IconImg = styled.img``
const Count = styled.div`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-left: 6px;
  margin-right: 6px;
  color: #bdbdbd;
`
