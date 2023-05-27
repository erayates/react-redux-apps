import React from 'react'
import { AiOutlineQuestion } from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
import { flipCard } from '../store/cardsSlice'
const CardItem = ({card,idx}) => {
    const dispatch = useDispatch();
    const { flippedCards } = useSelector(state => state.cards)

    const handleCardClick = (e, card) => {
        const checkCard = flippedCards.find((c) => c.id === card.id);
        if (!checkCard && flippedCards.length < 2) {
            dispatch(flipCard(card));
            e.target.classList.add('flipped');
        }
    }

    return (
        <div key={idx} data-id={card.id} className='card' onClick={(e) => handleCardClick(e, card)}>
            <div className='card-inner z-0' onClick={(e) => e.stopPropagation()}>
                <div className='card-front'>
                    <AiOutlineQuestion className='text-4xl text-gray-400' />
                </div>
                <div className='card-back'>
                    <img src={card.image} alt='Logo Image' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default CardItem