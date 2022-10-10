import { useEffect, useState } from 'react'
import { getTicket } from '../../api/data'
import { TableStyle, tdStyle, trStyle } from './style'

export default function Ticket() {
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    getTicket().then((res) => {
      setDataList(() => res.data)
      console.log(dataList)
    })
  }, [])

  const trList = ['id', 'title', 'price', 'user name', 'createdAt']
  return (
    <TableStyle>
      <thead>
        <tr>
          {trList.map((column: any) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((item: any) => (
          <tr
            key={
              item.idx +
              item.ticket.title +
              item.ticket.price +
              item.user.name +
              item.createdAt
            }
          >
            <td>{item.idx}</td>
            <td>{item.ticket.title}</td>
            <td>{item.ticket.price}</td>
            <td>{item.user.name}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  )
}
