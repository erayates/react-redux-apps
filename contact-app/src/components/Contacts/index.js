import React from 'react'
import Form from './Form'
import List from './List'

import {useSelector,useDispatch} from 'react-redux'
import {contactSelectors, deleteContacts} from '../../redux/contactSlice'


function Contacts() {
  const total = useSelector(contactSelectors.selectTotal)
  const dispatch = useDispatch()
  const handleDeleteAll = () => {
    dispatch(deleteContacts())
  }
  return (
    <div className='container'>
        <h1>Contacts ({total})</h1>
        <span className='delete__all' onClick={handleDeleteAll}>Delete All</span>
        <Form/>
        <List/>
    </div>
  )
}


export default Contacts