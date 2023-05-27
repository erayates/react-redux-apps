import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
    cards: [],
    flippedCards: [],
    matchedCards: [],
    point: 100,    

}

export const setCards = createAsyncThunk('cards/setCards', async() => {
    const response = await fetch('https://api.jsonbin.io/v3/b/647155b8b89b1e2299a586a4');
    const data = await response.json();
    return data.record.data;
})


const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
       

    },        
    extraReducers:{
        [setCards.fulfilled]: (state, action) => {
            state.cards = action.payload;
        }
    }
})




export const selectCards = (state) => state.cards.cards;
export default cardSlice.reducer;


    
    