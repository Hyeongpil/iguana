import React from 'react'
import styled from 'styled-components'

const RrButton = ({ content, onClick }) => {
  return <RrButtonWraper onClick={onClick}>{content}</RrButtonWraper>
}

export default RrButton

const RrButtonWraper = styled.button`
  background: #000000;
  color: #fff;
  border-radius: 30px;
`
