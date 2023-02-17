/**
 * @description : This file is for the services for the routes functions
 */

import Question from "../models/Question.js"
import Result from "../models/Result.js"
import questions, { answers } from './data.js'

export const getQuestions = async (req, res) => {
    try {
        const q = await Question.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    // res.json('/questions GET request working just fine!')
}
export const postQuestions = async (req, res) => {
    try {
        Question.insertMany({ questions, answers }, (error, data) => {
            res.json({ message: 'Data Posted Successfully!' })
        })
    } catch (error) {
        res.json({ error })
    }
}
export const delQuestions = async (req, res) => {
    try {
        await Question.deleteMany()
        res.json({ message: 'Questions deleted Successfully..' })

    } catch (error) {
        res.json({ error })
    }
}

export const getResult = async (req, res) => {
    try {
        const r = await Result.find()
        res.json(r)
        // res.json('/result GET request working just fine!')
    } catch (error) {
        res.json({ error })
    }
}
export const postResult = async (req, res) => {
    try {
        const { username, result, score, passed } = req.body
        if (!username && !result) throw new Error('Data Not Provided!!!')
        
        Result.create({ username, result, score, passed }, (error, data) => {
            res.json({ message: 'Result was saved!' })
        })
        // res.json('/result POST request working just fine!')
    } catch (error) {
        res.json({ error })
    }
}
export const delResult = async (req, res) => {
    try {
        await Result.deleteMany()
        res.json({ message: 'result deleted success..' })
    } catch (error) {
        res.json(error)
    }
}