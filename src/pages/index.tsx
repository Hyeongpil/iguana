import React, { useEffect, useState } from 'react'
import RrAlarmCard from 'components/organism/RrAlarmCard'
import styled from 'styled-components'
import RrSection from 'components/molecule/RrSection'
import RrCategoryCard from 'components/organism/RrCategoryCard'
import { useHistory } from 'react-router-dom'
import AlarmRepository from '../repositories/AlarmRepository'
import { Alarm } from 'entities/Alarm'

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

const IndexPage = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([])

  const history = useHistory()
  const repository = new AlarmRepository()

  const fetchAlarms = async () => {
    setAlarms(await repository.FetchAlarms())
  }

  useEffect(() => {
    fetchAlarms()
  }, [])

  return (
    <>
      <Banner>
        <Img
          src={process.env.PUBLIC_URL + '/image/feed.png'}
          alt="피드 이미지"
        />
      </Banner>
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
          onClick={() => history.push('/alarmdrawer')}
        />
        <AlarmListWrapper>
          {alarms.map(alarm => (
            <RrAlarmCard
              title={alarm.title}
              content={alarm.description}
              userName={alarm.user.nickname}
            />
          ))}
        </AlarmListWrapper>
      </ContentWrapper>
    </>
  )
}
export default IndexPage

const Banner = styled.section`
  width: 100%;
  height: 300px;
  background: #f2f2f2;
  display: flex;
  justify-content: flex-end;
`

const Img = styled.img`
  margin-right: 10%;
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
