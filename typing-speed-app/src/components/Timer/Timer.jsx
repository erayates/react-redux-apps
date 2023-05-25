import React, { useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { setToggleModal } from '../../reducers/wordsSlice'


const Timer = () => {
  const [countdown, setCountdown] = React.useState(60)
  const dispatch = useDispatch();


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev <= 0 ? 0 : prev - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  },[])

  useEffect(() => {
    countdown === 0 && dispatch(setToggleModal(true)) 
  },[countdown])

  return (
    <div id="countdown">
      <div id="countdown-number">
        {countdown === 0 ? <span>#</span> : countdown}
      </div>
      <svg className='countdown-svg'>
        <circle r="25" cx="29" cy="29"></circle>
      </svg>
    </div>
  )
}

export default Timer
