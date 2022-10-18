import React from 'react'

import { useSelector } from 'react-redux'
import {contactSelectors} from '../../redux/contactSlice'
import Item from './Item'

function List() {
  const contacts = useSelector(contactSelectors.selectAll)
  
  return (
    
    <ul className='list'>
    {
        contacts.map(contact => <li key={contact.id} className='list__item'><Item key={contact.id} item={contact} /></li>)
    }
    </ul>
  )
}

export default List