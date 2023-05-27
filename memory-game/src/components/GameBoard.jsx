import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCards, setCards } from '../store/cardsSlice'
import { AiOutlineQuestion } from 'react-icons/ai'

const GameBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCards())
    }, [])

    const cards = useSelector(selectCards)



    return (
        <div className='gameboard grid grid-cols-5 gap-4'>
            {
                cards.map((card) => {
                    return (
                        <div className='card h-[200px] flex items-center justify-center shadow-lg rounded-lg'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <AiOutlineQuestion fontSize={72} className='text-red-200'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default GameBoard