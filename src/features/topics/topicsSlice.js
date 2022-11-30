import { createSlice } from "@reduxjs/toolkit";

const topics = createSlice({
    name:'topics',
    initialState:{
        topics:{
        }
    },
    reducers:{
        addTopic: (state,action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds:[]};
        },
        addQuizzId: (state,action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizzId)
        }
    }
})

export const selectTopics = (state) => {
    return state.topics.topics
}

export const {addTopic} = topics.actions ;
export const {addQuizzId} = topics.actions;

export default topics.reducer;
