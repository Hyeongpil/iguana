import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import RrNoticeConts from './RrNoticeConts'

const data = [
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
  { date: '03.13', desc: 'Rrrr 신규 프로모션 안내' },
]

const RrNotice = () => {
  return (
    <RrNoticeWrapper>
      {data.map((list, index) => (
        <NoticeList key={index}>
          <Date>{list.date}</Date>
          <Description to="/my/notice/conts">{list.desc}</Description>
        </NoticeList>
      ))}

      <Route path="/my/notice/conts" component={RrNoticeConts} />
    </RrNoticeWrapper>
  )
}

export default RrNotice

const RrNoticeWrapper = styled.ul`
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;

  position: relative;
`

const NoticeList = styled.li`
  border-bottom: 1px solid #e0e0e0;
  padding: 22px 16px 19px;
  list-style: none;
`

const Date = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.122727px;
  color: #bdbdbd;
  padding-right: 20px;
`

const Description = styled(NavLink)`
  font-size: 15px;
  line-height: 20px;
  color: #222;
  text-decoration: none;
`
