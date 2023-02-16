// Creating a custom hook to Fetch api data and set the value to the redux store 

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as Action from '../redux/questionsReducer'
import data, { answers } from '../database/data'


export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({ isLoading: false, apiData:[], serverError: null })
    const dispatch = useDispatch()
    

    useEffect(()=>{

        // fetch api data
        async function fetchData() {
            setGetData(prev => ({ ...prev,isLoading: true}))
            
            try {
                const questions = await data
                if(questions.length > 0) { // if questions is there and loaded successfully
                    setGetData(prev => ({ ...prev,isLoading: false}))
                    setGetData(prev => ({ ...prev,apiData: {questions, answers}}))
                    dispatch(Action.startExamAction({questions, answers}))
           
                }else {
                    throw new Error('Error: There is no questions found!')
                }

            } catch (error) {
                setGetData(prev => ({ ...prev,isLoading: false}))
                setGetData(prev => ({ ...prev,serverError: error}))
            }

        }
        fetchData()

    },[dispatch])

    return [getData, setGetData]
}