import React, { useEffect,useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { useSelector } from 'react-redux'


const ScoreBoard = () => {
    const { score } = useSelector(state => state.cards)
    
    const handleClick = () => {
        window.location.reload();
    }

    return (
        <div className='score-board'>
            <h3 className='score-board__title'>Rules</h3>
            <p className='score-board__subtitle'><BsInfoCircle className='inline-block' /> Click on the cards to flip them over. If you find two cards with the same image, you get 50 points, otherwise you lose 10 points.</p>
            <p>Your Score: {score}</p>
            <button className='score-board__button' onClick={handleClick}>Reset Game</button>
        </div>
    )
}

export default ScoreBoard