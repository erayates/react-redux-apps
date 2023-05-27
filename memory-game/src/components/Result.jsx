import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetGame } from '../store/cardsSlice'

const Result = () => {
    const { score } = useSelector(state => state.cards)
    const dispatch = useDispatch();
    const handleClick = () => {
        window.location.reload();
    }
    
    return (
        <div className='result'>
            <div className='result__content'>
                <h1 className='result__title'>Congratulations!</h1>
                <p className='result__subtitle'>You have successfully completed the game.</p>
                <p className='result__text'>Your score is: <span className='result__score'>{score}</span></p>
                <button className='result__button' onClick={handleClick}>Play Again</button>
            </div>
        </div>
    )
}

export default Result