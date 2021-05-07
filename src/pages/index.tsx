import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
    content: '당신을 자극할 명언 알림',
  },
  {
    title: '응원',
    content: '오늘 하루 힘차게 보내',
  },
  {
    title: '건강',
    content: '몸짱 되야지',
  },
  {
    title: '쓴소리',
    content: '자극이 필요할 땐?',
  },
  {
    title: '공부 자극',
    content: '지금 당장 공부 시작!',
  },
  {
    title: '직장인',
    content: '직장인들 다 모여!',
  },
  {
    title: '학생',
    content: '공부하느라 힘들지?',
  },
]

const IndexPage = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([])

  const history = useHistory()
  console.log(history)

  const repository = useMemo(() => new AlarmRepository(), [])

  const fetchAlarms = useCallback(async () => {
    setAlarms(await repository.FetchAlarms())
  }, [repository])

  useEffect(() => {
    fetchAlarms()
  }, [fetchAlarms])

  return (
    <>
      <Banner>
        <Img
          src={process.env.PUBLIC_URL + '/image/feed.png'}
          alt="피드 이미지"
        />
      </Banner>
      <ContentWrapper>
        <RrSection title="테마 RRRR" className="mt-60" />
        <CategoryListWrapper>
          {categoryList.map(category => (
            <RrCategoryCard title={category.title} content={category.content} />
          ))}
        </CategoryListWrapper>
        <RrSection
          title="인기 RRRR"
          className="mt-60"
          onClick={() => history.push('/alarmdrawer')}
        />
        <AlarmListWrapper>
          {alarms.map(alarm => (
            <RrAlarmCard alarm={alarm} />
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
  margin-bottom: 50px;
  padding-left: 10%;
  padding-right: 10%;
`

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`
const AlarmListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  grid-gap: 16px;
  margin-top: 40px;
`
