import { Router } from "express";
import * as controller from '../controllers/controller.js'


const router = Router()

/**
 * @description here I will create my different apis 
 * @تكنيك I will use the route chaining method 
 
*/

// questions route
router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.postQuestions)
    .delete(controller.delQuestions)

// result routes 
router.route('/result')
    .get(controller.getResult)
    .post(controller.postResult)
    .delete(controller.delResult)

// router.get('/questions',(req, res) => {
//     try {
//         res.json('/questions API working just fine!')
//     } catch (error) {
//         res.json(error)
//     }
// })



export default router