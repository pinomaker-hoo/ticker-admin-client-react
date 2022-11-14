import { useEffect, useState } from 'react'
import { getBoard } from '../../api/data'
import { TableStyle, tdStyle, trStyle } from './style'

export default function Board() {
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    getBoard().then((res) => {
      setDataList(() => res.data)
    })
  }, [dataList])

  const trList = ['id', 'title', 'text', 'user name', 'createdAt']
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
              item.title +
              item.text +
              item.user.name +
              item.createdAt
            }
          >
            <td>{item.idx}</td>
            <td>{item.title}</td>
            <td>{item.text}</td>
            <td>{item.user.name}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  )
}
