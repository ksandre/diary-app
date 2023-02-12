import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
        },
        setDescription: (state, action: { payload: { id: string; description: string } }) => {
            const todo = state.diaries.find((todo) => todo.uniqueId === action.payload.id);
            if (todo) {
                todo.description = action.payload.description;
            }
        },
        setRating: (state, action: { payload: { id: string; rating: number } }) => {
            const todo = state.diaries.find((todo) => todo.uniqueId === action.payload.id);
            if (todo) {
                todo.rating = action.payload.rating;
            }
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
