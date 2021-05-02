import React from 'react'
import styled from 'styled-components'

const RrIcon = ({ src, alt, size, top, left }) => {
  return <Img src={src} alt={alt} size={size} top={top} left={left} />
}

export default RrIcon

const Img = styled.img<{ size: number; top: number; left: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`
