import axios from 'axios'

const auth = axios.create({
  baseURL: 'http://210.90.136.10:3050',
  withCredentials: true,
  headers: {},
})

export const getUser = async () => {
  return await auth.get('/auth')
}

export const getTicket = async () => {
  return await auth.get('/ticketUser')
}
export const getBoard = async () => {
  return await auth.get('/board')
}
