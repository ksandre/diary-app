import { createSlice } from "@reduxjs/toolkit";
import * as Models from "models";

export interface diaryState {
    diaries: Models.DiaryResponse[];
}

const initialState: diaryState = {
    diaries: [],
};

export const diarySlice = createSlice({
    name: "diary",
    initialState,
    reducers: {
        setDate: (state, action: { payload: { id: string; date: string } }) => {
            const todo = state.diaries.find((todo) => todo.uniqueId === action.payload.id);
            if (todo) {
                todo.date = action.payload.date;
            }
            // Had to do this to save progress without Back-End
            localStorage.setItem("diaryDB", JSON.stringify(state.diaries));
        },
        setDescription: (state, action: { payload: { id: string; description: string } }) => {
            const todo = state.diaries.find((todo) => todo.uniqueId === action.payload.id);
            if (todo) {
                todo.description = action.payload.description;
            }
            // Had to do this to save progress without Back-End
            localStorage.setItem("diaryDB", JSON.stringify(state.diaries));
        },
        setRating: (state, action: { payload: { id: string; rating: number } }) => {
            const todo = state.diaries.find((todo) => todo.uniqueId === action.payload.id);
            if (todo) {
                todo.rating = action.payload.rating;
            }
            // Had to do this to save progress without Back-End
            localStorage.setItem("diaryDB", JSON.stringify(state.diaries));
        },
        setDiaries: (state, action) => {
            state.diaries = action.payload;
        },
        resetDiaries: (state, action) => {
            return initialState;
        },
    },
});

export const { setDate, setDescription, setRating, setDiaries, resetDiaries } = diarySlice.actions;
export default diarySlice.reducer;
