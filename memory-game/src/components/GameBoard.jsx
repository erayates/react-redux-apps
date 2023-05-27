import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { matchCards, setCards, addPoint, deletePoint, setFinish } from '../store/cardsSlice'
import CardItem from './CardItem'


const GameBoard = () => {
    const dispatch = useDispatch();

    const { flippedCards, cards, matchedCards, loading } = useSelector(state => state.cards)

    useEffect(() => {
        if (flippedCards.length === 2) {
            dispatch(matchCards());
            if (flippedCards[0].name !== flippedCards[1].name) {
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        document.querySelector(`[data-id="${card.id}"]`).classList.remove('flipped')
                    })
                }, 1000)
                dispatch(deletePoint());
            } else {
                dispatch(addPoint());
            }
        }
    }, [flippedCards])

    useEffect(() => {
        matchedCards.forEach((card) => {
            document.querySelector(`[data-id="${card.id}"]`).classList.add('flipped')
        })
        matchedCards.length === cards.length && cards.length > 0 && dispatch(setFinish());
    }, [matchedCards])


    useEffect(() => {
        dispatch(setCards())
    }, [])

    return (
        <>
            {loading && <p className='loading'>Loading...</p>}
            {!loading && (
                <div className='gameboard'>
                    {
                        cards.map((card, idx) => {
                            return (
                                <CardItem card={card} idx={idx} />
                            )
                        })
                    }
                </div>
            )}

        </>
    )
}

export default GameBoard