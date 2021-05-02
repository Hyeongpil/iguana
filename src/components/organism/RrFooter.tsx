import React from 'react'
import styled from 'styled-components'

const RrFooter = () => {
  return (
    <RrFooterWrapper>
      <Logo>Rrrr</Logo>
      <WriterWrapper>
        <Writer>만든 이</Writer>
        <FlexRowWrapper>
          <PartColWrapper>
            <PartWrapper>
              <Writer>UX/UI</Writer>
              <Writer>김형진, 이진형, 최지우</Writer>
            </PartWrapper>
            <PartWrapper>
              <Writer>FrontDev</Writer>
              <Writer>박은재, 최형필</Writer>
            </PartWrapper>
          </PartColWrapper>
          <PartColWrapper>
            <PartWrapper className="ml-30">
              <Writer>iOS Dev</Writer>
              <Writer>김경훈, 박진하, 윤주호, 최원석</Writer>
            </PartWrapper>
            <PartWrapper className="ml-30">
              <Writer>Backend Dev</Writer>
              <Writer>임지영, 주성민, 최상희</Writer>
            </PartWrapper>
          </PartColWrapper>
        </FlexRowWrapper>
      </WriterWrapper>
      <FooterWrapper>
        <FooterContent>© E9i4 2021 copyright all rights reserved</FooterContent>
        <FlexRowWrapper>
          {/* <RrImage path={'./assets/image/mashup.png'} size="16" /> */}
          <FooterContent style={{ marginLeft: '10px' }}>
            https://www.mash-up.it
          </FooterContent>
        </FlexRowWrapper>
      </FooterWrapper>
    </RrFooterWrapper>
  )
}

export default RrFooter

const RrFooterWrapper = styled.footer`
  height: 300px;
  background-color: #222222;
  // margin-top: 50px;
  padding-top: 34px;
  padding-left: 10%;
  padding-right: 10%;
`
const FlexColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Logo = styled.span`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: white;
`

const WriterWrapper = styled(FlexColWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`
const PartWrapper = styled(FlexColWrapper)`
  margin-top: 20px;
`

const PartColWrapper = styled(FlexColWrapper)`
  margin-right: 30px;
`

const Writer = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  color: #f2f2f2;
`
const FooterWrapper = styled(FlexRowWrapper)`
  justify-content: space-between;
  margin-top: 20px;
`
const FooterContent = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  color: #828282;
  margin-top: 2px;
`
