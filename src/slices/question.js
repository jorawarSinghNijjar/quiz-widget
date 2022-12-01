import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentQuestion: 1,
    progress: 11.2
};

const questionNumberSlice = createSlice({
    name: 'questionNumber',
    initialState,
    reducers: {
        nextQuestion: (state, action) => {
            state.currentQuestion++;
            state.progress = state.progress + 11.2;
        },
        previousQuestion: (state,action) => {
            state.currentQuestion--;
            state.progress = state.progress - 11.2;
        }
    }
});

export const {nextQuestion, previousQuestion} = questionNumberSlice.actions;

export default questionNumberSlice.reducer;