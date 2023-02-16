import { createSlice } from '@reduxjs/toolkit'

export const questionsReducer = createSlice({
    name: 'result',
    initialState: {
        queus: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            let {questions, answers} = action.payload
            return {
                ...state,
                queus: questions,
                answers, // same as answers: answers
                
            }
        },
        setNextQuestion:(state, action) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        setPrevQuestion:(state, action) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetAction: () => {
            return {
                queus: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const { startExamAction, setNextQuestion, setPrevQuestion, resetAction}  = questionsReducer.actions

export default questionsReducer.reducer
