import React from 'react'
import styled from 'styled-components'

const RrButton = ({ content, onClick, width }) => {
  return (
    <RrButtonWraper onClick={onClick} width={width}>
      {content}
    </RrButtonWraper>
  )
}

export default RrButton

const RrButtonWraper = styled.button<{ width: number }>`
  background: #000000;
  width: 100%;
  max-width: ${props => props.width}px;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`
