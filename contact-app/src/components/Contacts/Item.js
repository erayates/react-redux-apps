import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactSlice'

import {Link} from 'react-router-dom'

function Item({item}) {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    if(window.confirm('Are you sure?')) dispatch(deleteContact(id))
    
  }
  return (
    <>
      <span>{item.name}</span>
      <div>
        <span>{item.number}  </span>
        <Link to={`/edit/${item.id}`} className='edit__btn'>Edit</Link>
        <span className='delete' onClick={() => handleDelete(item.id)}>X</span>
      </div>
    </>
  )
}

export default Item