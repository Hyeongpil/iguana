import React, { FC } from 'react'
import styled from 'styled-components'

interface RrTextProps {
  text: string
  size?: number
  weight?: number
  className?: string
}

interface RrTextStyleProps {
  size?: number
  weight?: number
}

const RrText: FC<RrTextProps> = ({
  text,
  size = 12,
  weight = 500,
  className,
}: RrTextProps) => (
  <>
    <Text className={className} weight={weight} size={size}>
      {text}
    </Text>
  </>
)

export default RrText

const Text = styled.span<RrTextStyleProps>`
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.122727px;

  /* Primary-Black */

  color: #222222;
`
