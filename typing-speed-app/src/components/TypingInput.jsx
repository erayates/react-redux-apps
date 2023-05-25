import {useState} from 'react'
import {TextField} from '@mui/material'
import { useDispatch } from 'react-redux'
import { checkWord } from '../reducers/wordsSlice';


function TypingInput() {
  const [input, setInput] = useState('')
  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.code === 'Space'){
      dispatch(checkWord(input))
      setInput('')
    }
  }


  return (
    <TextField 
      id='standard-basic' 
      label="Standard"
      variant="standard" 
      fullWidth={true} 
      onChange={(e) => handleInputChange(e)} 
      value={input} 
      onKeyUp={(e) => handleKeyPress(e)}
      placeholder='Type the words here...'  
    />
  )
}
export default TypingInput   