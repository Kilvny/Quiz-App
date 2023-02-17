// Creating a custom hook to Fetch api data and set the value to the redux store 

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as Action from '../redux/questionsReducer'
import data, { answers } from '../database/data'
import { getServerData } from "./helpers"


export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({ isLoading: false, apiData:[], serverError: null })
    const dispatch = useDispatch()
    

    useEffect(()=>{

        // fetch api data
        async function fetchData() {
            setGetData(prev => ({ ...prev,isLoading: true}))
            
            try {
                // const questions = await data
                const fetchedQ = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/v1/questions`, (data) => data)

                console.log(fetchedQ)

                const [{ questions, answers }] = await fetchedQ

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