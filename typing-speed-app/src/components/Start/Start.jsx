import React from 'react'
import './style.css'

import AdsClickIcon from '@mui/icons-material/AdsClick';

const Start = ({ setStart }) => {
  const handleStart = () => {
    setStart(true)
  }

  return (
    <div className='start'>
      <AdsClickIcon sx={{fontSize: '100px', marginRight: '20px'}}/>
      <div>
        <button className='start-btn' onClick={handleStart}>Start</button>
        <p className='start-title'>Press the START button to start typing!</p>
      </div>
    </div>
  )
}

export default Start