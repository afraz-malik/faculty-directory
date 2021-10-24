import React from 'react'
import ReceivedMessagesCss from './ReceivedMessages.module.scss'

// Redux
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../../redux/data/data.actions'
const DataListGen = ({ data }) => {
  const dispatch = useDispatch()

  const manageDelete = () => {
    const result = window.confirm('Are you sure you want to delete?')
    if (result) {
      dispatch(deleteMessage(data.id))
    }
  }
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.subject}</td>
      <td>{data.message}</td>
      <td>
        <div className={ReceivedMessagesCss.actions}>
          <img alt="" src="images/delete.svg" onClick={() => manageDelete()} />
        </div>
      </td>
    </tr>
  )
}

export default DataListGen
