import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { shuffle } from '../utils/helpers';


const initialState = {
    cards: [],
    flippedCards: [],
    matchedCards: [],
    score: 100,
    loading: false,
    isGameFinished: false

}

export const setCards = createAsyncThunk('cards/setCards', async () => {
    const response = await fetch('https://api.jsonbin.io/v3/b/647155b8b89b1e2299a586a4');
    const data = await response.json();
    return shuffle(data.record.data);
})


const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        flipCard: (state, action) => {
            if (state.flippedCards.length < 2) {
                state.flippedCards = [...state.flippedCards, action.payload]
            }
        },
        matchCards: (state) => {
            if (state.flippedCards[0].name === state.flippedCards[1].name) {
                state.matchedCards.push(state.flippedCards[0]);
                state.matchedCards.push(state.flippedCards[1]);
                state.flippedCards = [];
            }else{
                state.flippedCards = [];
            }
        },
        addPoint: (state) => {
            state.score += 50;
        },
        deletePoint: (state) => {
            state.score -= 10;
        },
        setFinish: (state) => {
            state.isGameFinished = !state.isGameFinished;
        }

    },
    extraReducers: {
        [setCards.fulfilled]: (state, action) => {
            state.cards = action.payload;
            state.loading = false;
        },
        [setCards.pending]: (state, action) => {
            state.loading = true;
        }
    }
})



export const { flipCard,matchCards,addPoint,deletePoint,resetGame,setFinish } = cardSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardSlice.reducer;



