import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useDispatch, useSelector } from 'react-redux'
import { paginateNextQuestion, paginatePrevQuestion, pushAnswer } from '../hooks/helpers'
import { Navigate } from 'react-router-dom'

const Quiz = () => {

    const [answer, setAnswer] =  useState(undefined)
    const state = useSelector(state => state)
    const score = useSelector(state => state.result.score)
    const dispatch = useDispatch()

    const { queus , trace } = state.questions

    // useEffect(()=>{
    //     console.log('the score is:',score)
    //     // console.log(questions,result)
    //     // console.log(apiData)

    // })

    const onPrev = () => {
        console.log('prev button clicked')
        if(trace > 0) {
            dispatch(paginatePrevQuestion())
        }

    }
    const onNext = () => {
        console.log('next button clicked')
        if ( queus.length > trace && answer !== undefined) {
            dispatch(paginateNextQuestion())
            if(trace >= score.length){
                dispatch(pushAnswer(answer))
            }
        }

        // setAnswer(undefined)
    }

    const onSelected = (ans) => {
        // console.log(ans)
        setAnswer(ans)
    }

    // user reached the end of the questions 
    if (score.length > 0){
        if(score && score.length >= queus.length ){
            return <Navigate to={'/result'} replace={true}></Navigate>
        }
    }

  return (
    <div className='container'>
        <h2 className='title text-light'>Quiz Application</h2>

        {/* The Questions here */}
        <Question onSelected={onSelected}/>

        <div className='grid'>
            {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button>
 : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>

    </div>
  )
}

export default Quiz