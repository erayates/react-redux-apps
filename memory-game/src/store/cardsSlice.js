import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cards: [],
    flippedCards: [],
    matchedCards: [],
    isGameStarted: false,
    isGameFinished: false,
    point: 100,    

}

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},        
})


export const selectCards = (state) => state.cards.cards;
export default cardSlice.reducer;


    
    