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
        <ContentBoxText>유저 관리</ContentBoxText>
        <ContentBoxBody>
          <TableContainer>
            <Routes>
              <Route path="/" element={<User />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </TableContainer>
        </ContentBoxBody>
      </ContentBox>
    </InBox>
  )
}

const InBox = styled.div`
  width: 1500px;
  height: 1200px;
`
const HeaderBox = styled.div`
  width: 100%;
  height: 10%;
`

const NavBox = styled.div`
  width: 12%;
  height: 85%;
  float: left;
  text-align: center;
`

const ContentBox = styled.div`
  width: 88%;
  height: 85%;
  background-color: #efefef;
  float: left;
`
const ContentBoxText = styled.h3`
  margin-left: 5%;
  font-size: 32px;
`

const ContentBoxBody = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 15px;
  margin-left: 5%;
`
const ScrollSection = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 15px;
  margin-left: 5%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: red;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
  }
`

const TableContainer = styled.div`
  overflow: scroll;
`
