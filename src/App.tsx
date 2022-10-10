import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Board from './pages/Board/Board'
import Ticket from './pages/Ticket/Ticket'
import User from './pages/User/User'

export default function App() {
  return (
    <InBox>
      <HeaderBox>
        <h1>Ticket 관리자 페이지</h1>
      </HeaderBox>
      <hr />
      <NavBox>
        <Link to={'/'}>
          <h3>User 관리</h3>
        </Link>
        <Link to={'/ticket'}>
          <h3>Ticket 관리</h3>
        </Link>
        <Link to={'/board'}>
          <h3>Board 관리</h3>
        </Link>
      </NavBox>
      <ContentBox>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </ContentBox>
    </InBox>
  )
}

const InBox = styled.div`
  width: 1900px;
  height: 1200px;
`
const HeaderBox = styled.div`
  width: 100%;
  height: 15%;
`

const NavBox = styled.div`
  width: 20%;
  height: 85%;
  float: left;
  text-align: center;
`

const ContentBox = styled.div`
  width: 80%;
  height: 85%;
  background-color: #efefef;
  margin-left: 380px;
`
