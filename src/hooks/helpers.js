import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { answers } from '../database/data'
import * as Action from '../redux/questionsReducer'
import * as resAction from '../redux/resultReducer'

export const paginateNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.setNextQuestion())
    } catch (error) {
        console.log(error)
    }
}
export const paginatePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.setPrevQuestion())
    } catch (error) {
        console.log(error)
    }
}

export const pushAnswer = (ans) =>  async (dispatch) => {
    try {
        await dispatch(resAction.setUserScore(ans))
    } catch (error) {
        console.log(error)
    }
}

export const updateAnswer = (i) => async (dispatch) => {
    try {
        await dispatch(resAction.updateUserScore(i))
    } catch (error) {
        console.log(error)
    }
}


export const attemptsNumber = (result) => {
    return result.filter(r => r !== undefined).length
}


export const correctAnswers = (score, answers, points) => {
    return score.map((element, i) => answers[i]=== element).filter(i => i).map(i=> points).reduce((prev, curr) => prev + curr ,0)
    // the first map will give you an array of true or false for each answer and then we are going to filter the true values only and we are going to return 10 points for each true value and then get sum with redue 
}


export const checkPassed = (totalScore, userScore) => {
    if(totalScore/2 <= userScore){
        return true
    } else {
        return false 
    }
}


// routes restrictions (protection)

export const CheckUserAuth = ({children}) => {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}