import React from 'react'
import {BsInfoCircle} from 'react-icons/bs'


const ScoreBoard = () => {
  return (
    <div className='score-board w-[300px]  absolute left-[20px] top-[20px] rounded-lg shadow-xl font-poppins p-4' >
        <h3 className=' text-xl font-semibold text-red-400'>Rules</h3>
        <p className='text-sm text-gray-400 text-[14px] my-3'><BsInfoCircle className='inline-block'/> Click on the cards to flip them over. If you find two cards with the same image, you get 50 points, otherwise you lose 10 points.</p>
        <p>Your Score: 0</p>
    </div>
  )
}

export default ScoreBoard