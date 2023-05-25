
import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Header from './components/Header/Header'

import TypingInput from './components/TypingInput'
import WordList from './components/WordList'

import { Box, Container } from '@mui/material'
import Start from './components/Start/Start'
import Timer from './components/Timer/Timer'
import ResultModal from './components/Result/Result'


function App() {
  const [start, setStart] = useState(false)

  return (
    <>
      <Background />
      <Container maxWidth={'lg'} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Header />
        {
          start ? (
            <>
              <WordList />
              <Box sx={{display:'flex', width:'100%', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <TypingInput />
                <Timer />
              </Box>
            </>
          )
            : <Start setStart={setStart} />
        }
        <ResultModal setStart={setStart}/>
      </Container>
    </>
  )
}

export default App
