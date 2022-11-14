import { useEffect, useState } from 'react'
import { getUser } from '../../api/data'
import { TableStyle, tdStyle, trStyle } from './style'

export default function User() {
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    getUser().then((res) => {
      setDataList(() => res.data)
      console.log(dataList)
    })
  }, [dataList])

  const trList = ['id', 'email', 'name', 'provider', 'birth', 'createdAt']
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
              item.id +
              item.email +
              item.name +
              item.provider +
              item.brith +
              item.createdAt
            }
          >
            <td>{item.idx}</td>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.provider}</td>
            <td>{item.birth}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  )
}
