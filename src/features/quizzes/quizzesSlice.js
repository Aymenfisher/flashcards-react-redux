import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicsSlice";

const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
    }
}
})

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes
}



export const {addQuiz} = quizzes.actions;

export const createQuizz = (payload) =>{
    return (dispatch) =>{
        dispatch(addQuiz(payload));
        dispatch(addQuizzId({topicId:payload.topicId,quizzId:payload.id}));
    }
}

export default quizzes.reducer