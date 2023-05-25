import React from 'react'
import './style.css'
import KeyboardIcon from '@mui/icons-material/Keyboard';

const Header = () => {
  return (
    <div className='header'>
        <KeyboardIcon sx={{fontSize: '100px', color:'#d1b056'}}/>
        <div>
          <h1 className='header-title'>Typing Speed App</h1>
          <p className='header-subtitle'>Test your ten-finger typing speed now!</p>
        </div>
    </div>
  )
}

export default Header