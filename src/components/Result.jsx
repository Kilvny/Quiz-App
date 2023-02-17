import React, { useEffect } from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAction } from '../redux/questionsReducer'
import { resetResult } from '../redux/resultReducer'
import { attemptsNumber, checkPassed, correctAnswers, usePostResult } from '../hooks/helpers'

const Result = () => {

    const dispatch = useDispatch()
    const {questions: {queus, answers} , result: {score, userId}} = useSelector(state => state)
    const totalScore = queus.length * 10
    const attempts = attemptsNumber(score)
    const userScore = correctAnswers(score,answers, 10)
    const threshold = checkPassed(totalScore, userScore)

    // Save user's result 
    usePostResult({
      result: [totalScore],
      username: userId,
      score: userScore,
      passed: threshold,
    },[]);
    console.log({
      result: [totalScore],
      username: userId,
      score: userScore,
      passed: threshold,
    });

    useEffect(()=> {
        console.log(score)
        console.log(threshold)
    },[])

    const onRestart = () => {
        dispatch(resetAction())
        dispatch(resetResult())
        }

  return (
    <div className='container'>
        <h1 className="title text-light">Quiz Application</h1>

        <div className="flex-center">
            <div className="flex">
                <span className="bold">UserName</span>
                <span>{userId}</span>
            </div>
            <div className="flex">
                <span className="bold">Total Score</span>
                <span>{totalScore || 0}</span>
            </div>
            <div className="flex">
                <span className="bold">No. Of Questions</span>
                <span>{queus.length || 0}</span>
            </div>
            {/* <div className="flex">
                <span className="bold">Total Attempts</span>
                <span>{attempts}</span>
            </div> */}
            <div className="flex">
                <span className="bold">User Score</span>
                <span>{userScore}</span>
            </div>
            <div className="flex">
                <span className="bold">Quiz Result</span>
                <span style={{ color: `${threshold ? '#2aff95' : '#ff2a66'}`}}>{threshold ? 'Passed' : 'Faild'}</span>
            </div>
        </div>

        <div className="start">
            <Link to='/' className='btn' onClick={onRestart}>Restart</Link>
        </div>
    
        <div className='container'>
            {/* ResultTable Component */}
            <ResultTable />
        </div>
    </div>
  )
}

export default Result