import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/contactSlice'

function Form() {
  const [name,setName] = useState('')
  const [number,setNumber] = useState(0)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !number) return false
    dispatch(addContact({id:nanoid(),name,number}))
    setName('')
    setNumber(0)
  }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)} />
        <button type='submit'>Add</button>
    </form>
  )
}

export default Form