import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {updateContact} from '../../redux/contactSlice'
import {useNavigate} from 'react-router-dom'



function EditForm({contact}) {
  const [name,setName] = useState(contact.name)
  const [number,setNumber] = useState(contact.number)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleUpdate = (e) => {
    e.preventDefault()
    if(!name || !number) return false
    dispatch(updateContact({id: contact.id,changes:{name,number}}))
    navigate('/')
  }

  return (
    <form onSubmit={handleUpdate}>
      <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button type='submit' onClick={handleUpdate}>Update</button>
    </form>
  )
}

export default EditForm