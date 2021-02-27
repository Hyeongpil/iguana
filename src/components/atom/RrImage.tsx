import React, { FC } from 'react'
import { HtmlProps } from 'react-helmet-async'
import styled from 'styled-components'

const RrImage: FC<HtmlProps> = ({ src, size }) => {
  return <RrImageWrapper src={src} size={size}></RrImageWrapper>
}

export default RrImage

const RrImageWrapper = styled.img<{ src ,size }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 4.33333px;
  background-color: gray;
`
