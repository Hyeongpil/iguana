import React from 'react'
import RrAlarmCard from 'components/organism/RrAlarmCard'
import styled from 'styled-components'
import RrSection from 'components/molecule/RrSection'
import RrCategoryCard from 'components/organism/RrCategoryCard'
import { useHistory } from 'react-router-dom'

const categoryList = [
  {
    title: '명언',
    content: '졸리다',
  },
  {
    title: '응원',
    content: '오늘 하루 힘차게 보내',
  },
  {
    title: '건강',
    content: '몸짱 되야지',
  },
]

const alarmCardList = [
  {
    title: '알람 제목',
    content: '알람 내용 알람 내용',
    userName: '최형필',
  },
  {
    title: '알람 제목',
    content: '알람 내용 알람 내용',
    userName: '최형필',
  },
  {
    title: '알람 제목',
    content: '알람 내용 알람 내용',
    userName: '최형필',
  },
  {
    title: '알람 제목',
    content: '알람 내용 알람 내용',
    userName: '최형필',
  },
  {
    title: '알람 제목',
    content: '알람 내용 알람 내용',
    userName: '최형필',
  },
]

const IndexPage = () => {
  const history = useHistory()
  return (
    <>
      <Banner />
      <ContentWrapper>
        <RrSection title="타이틀" className="mt-60" />
        <CategoryListWrapper>
          {categoryList.map(category => (
            <RrCategoryCard title={category.title} content={category.content} />
          ))}
        </CategoryListWrapper>
        <RrSection
          title="알림 서랍"
          className="mt-60"
          onClick={() => history.push("/alarmdrawer")}
        />
        <AlarmListWrapper>
          {alarmCardList.map(alarmCard => (
            <RrAlarmCard
              title={alarmCard.title}
              content={alarmCard.content}
              userName={alarmCard.userName}
            />
          ))}
        </AlarmListWrapper>
      </ContentWrapper>
    </>
  )
}
export default IndexPage

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background: #f2f2f2;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
`

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`
const AlarmListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  grid-gap: 16px;
  margin-top: 40px;
`