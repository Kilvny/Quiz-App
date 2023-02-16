import { createSlice } from '@reduxjs/toolkit'

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        score: [],
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setUserScore: (state, action) => {
            state.score.push(action.payload)
        },
        resetResult: () => {
            return {
                userId: null,
                score: [],
            }
        },
        updateUserScore:(state,action) => {
            const { trace, selected } = action.payload
            state.score.fill(selected, trace, trace + 1)
        }
    }
})

export const { setUserId, setUserScore, resetResult, updateUserScore}  = resultReducer.actions

export default resultReducer.reducer

