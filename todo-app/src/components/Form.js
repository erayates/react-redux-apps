import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import { addToDo } from '../redux/todos/todosSlice'

function Form() {
  const [title,setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addToDo({id: nanoid(), title, completed: false}))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input className='new-todo' placeholder='Whats needs to be done?' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
    </form>
  )
}

export default Form