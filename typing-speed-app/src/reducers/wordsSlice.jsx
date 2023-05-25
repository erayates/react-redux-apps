import { createSlice } from "@reduxjs/toolkit";
import { getWords } from "../utils/helpers";

const wordSlicer = createSlice({
    name: 'word',
    initialState: {
        words: getWords(),
        wordIndex: 0,
        trueWords: 0,
        falseWords: 0,
        keyStrokes: 0,
        trueKeyStrokes: 0,
        counter: 60,
        toggleModal: false,
    },
    reducers: {
        checkWord: (state, action) => {
            const setWord = action.payload
            if (setWord.trim() === state.words[state.wordIndex].turkish) {
                state.trueWords += 1
                state.trueKeyStrokes += state.words[state.wordIndex].turkish.length
                state.status = true
            } else {
                state.falseWords += 1
                state.status = false
            }
            state.keyStrokes += action.payload.length
            state.wordIndex += 1
        },

        setToggleModal: (state, action) => {
            state.toggleModal = action.payload
        },

        reset: (state) => {
            state.words = getWords()
            state.wordIndex = 0
            state.falseWords = 0
            state.trueWords = 0
            state.keyStrokes = 0
            state.trueKeyStrokes = 0
            state.counter = 60
            state.toggleModal = false
        }
    }

})

export const {checkWord,setToggleModal,reset} = wordSlicer.actions
export default wordSlicer.reducer
