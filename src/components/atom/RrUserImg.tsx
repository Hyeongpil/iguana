import React from 'react'
import styled from 'styled-components'

const RrUserImg = ({ size }) => {
  return <RrUserImgWrapper size={size}></RrUserImgWrapper>
}

export default RrUserImg

const RrUserImgWrapper = styled.div<{ size: string }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: black;
  border-radius: 50%;
`
