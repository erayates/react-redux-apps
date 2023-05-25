import { configureStore } from "@reduxjs/toolkit";

import wordSlicer from "../reducers/wordsSlice";

export const store = configureStore({
    reducer: {
        word: wordSlicer,
    },
});
