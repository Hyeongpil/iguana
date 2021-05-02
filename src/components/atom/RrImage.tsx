import React, { FC } from 'react'
import { HtmlProps } from 'react-helmet-async'
import styled from 'styled-components'

const RrImage: FC<HtmlProps> = ({ path, size }) => {
  return <RrImageWrapper src={require(`${path}`)} size={size}></RrImageWrapper>
}

export default RrImage

const RrImageWrapper = styled.img<{ src; size }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 4.33333px;
  background-color: gray;
`
