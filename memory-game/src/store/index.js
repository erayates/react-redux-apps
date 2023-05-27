import { configureStore } from "@reduxjs/toolkit";
import cardsSlicer from "./cardsSlice";

const store = configureStore({
    reducer: {
        cards: cardsSlicer,
    },
});

export default store;