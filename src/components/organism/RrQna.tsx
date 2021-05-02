import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const data = [
  { q: 'Rrrr의 사용법을 알고 싶어.' },
  { q: 'Rrrr의 사용법을 알고 싶어.' },
  { q: 'Rrrr의 사용법을 알고 싶어.' },
  { q: 'Rrrr의 사용법을 알고 싶어.' },
]

const RrQna = () => {
  return (
    <RrQnaWrapper>
      <ContentsWrapper>
        <Title>자주 묻는 질문</Title>
        <QnaListWrapper>
          {data.map((list, index) => (
            <QnaList key={index}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7971 17.8231C19.1147 18.2152 19.0485 18.7966 18.656 19.1076C18.4001 19.3104 18.1311 19.4772 17.8355 19.6124C17.271 19.8738 16.6578 20 15.9962 20C15.1273 20 14.3245 19.7972 13.6011 19.3961C12.8733 18.9949 12.0485 18.3008 11.1134 17.3093C9.94014 17.2101 8.88595 16.8631 7.95526 16.2637C7.02457 15.6642 6.29679 14.88 5.77631 13.911C5.26024 12.9375 5 11.8603 5 10.6749C5 9.41296 5.29553 8.27268 5.89099 7.25408C6.48204 6.23549 7.29805 5.43775 8.339 4.86085C9.37996 4.28394 10.5444 4 11.8412 4C13.138 4 14.3025 4.28845 15.3434 4.86085C16.3844 5.43324 17.2004 6.23099 17.7914 7.24507C18.3825 8.25915 18.6824 9.40394 18.6824 10.6749C18.6824 11.7025 18.4839 12.649 18.0825 13.5189C17.6812 14.3887 17.1254 15.1324 16.4108 15.7454C15.6963 16.3583 14.867 16.8 13.9231 17.0704C14.276 17.4535 14.62 17.733 14.9597 17.9042C15.2993 18.0755 15.661 18.1656 16.0491 18.1656C16.6314 18.1656 17.1607 17.9989 17.6371 17.6608C18.0076 17.3994 18.5104 17.4715 18.7971 17.8231ZM7.95967 13.0186C8.34783 13.7172 8.87713 14.2625 9.5564 14.6501C10.2357 15.0377 10.9943 15.2361 11.8412 15.2361C12.6881 15.2361 13.4512 15.0423 14.126 14.6501C14.8053 14.2625 15.3346 13.7172 15.7227 13.0186C16.1109 12.32 16.305 11.5403 16.305 10.6749C16.305 9.80958 16.1109 9.02986 15.7227 8.33127C15.3346 7.63268 14.8053 7.08732 14.126 6.69972C13.4468 6.31211 12.6881 6.1138 11.8412 6.1138C10.9943 6.1138 10.2313 6.30761 9.5564 6.69972C8.87713 7.08732 8.34342 7.63268 7.95967 8.33127C7.57152 9.02986 7.37744 9.80958 7.37744 10.6749C7.37744 11.5403 7.57152 12.32 7.95967 13.0186Z"
                  fill="#222222"
                />
              </svg>

              <List to="/my/qna">{list.q}</List>
            </QnaList>
          ))}
        </QnaListWrapper>
      </ContentsWrapper>
      <ContentsWrapper>
        <Title>이메일 문의</Title>
        <span>xxxx1234@gmail.com</span>
      </ContentsWrapper>
    </RrQnaWrapper>
  )
}

export default RrQna

const RrQnaWrapper = styled.div`
  padding: 40px 0;
`

const ContentsWrapper = styled.div`
  :nth-child(2) {
    margin-top: 59px;

    span {
      font-size: 16px;
      line-height: 19px;
    }
  }
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  color: #222222;
  font-weight: 600;
  font-size: 16px;
`

const QnaListWrapper = styled.ul`
  border-top: 1px solid #e0e0e0;
  padding: 0;
`

const QnaList = styled.li`
  margin: 25px 0;
  list-style: none;
  font-size: 15px;
  line-height: 20px;

  svg {
    transform: translateY(-1px);
  }
`

const List = styled(NavLink)`
  margin-left: 12px;
  color: #222;
  text-decoration: none;
`
