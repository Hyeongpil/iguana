import React from 'react'
import styled from 'styled-components'

const categoryPage = () => {
  return (
    <CategoryWrapper>
      <Title>카테고리</Title>
    </CategoryWrapper>
  )
}

export default categoryPage

const CategoryWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
`
