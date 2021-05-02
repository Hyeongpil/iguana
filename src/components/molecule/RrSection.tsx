import React, { FC, HTMLProps } from 'react'
import styled from 'styled-components'
import { ArrowRightCircle } from 'react-feather'

const RrSection: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  title,
  onClick,
}) => {
  return (
    <RrSectionWrapper className={className}>
      <Title>{title}</Title>
      <IconWrapper onClick={onClick}>
        <StyledArrowRightCircle size="25" />
      </IconWrapper>
    </RrSectionWrapper>
  )
}

export default RrSection
const RrSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`
const IconWrapper = styled.div``

const StyledArrowRightCircle = styled(ArrowRightCircle)<{ size: string }>`
  cursor: pointer;
  size: ${props => props.size};
`
