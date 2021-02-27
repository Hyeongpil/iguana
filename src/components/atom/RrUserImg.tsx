import React from 'react'
import styled from 'styled-components'

const RrUserImg = ({ image, size }) => {
  return (
    <RrUserImgWrapper
      size={size}
      src="/assets/image/profile.png"
    ></RrUserImgWrapper>
  )
}

export default RrUserImg

const RrUserImgWrapper = styled.img<{ size: string }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
`
