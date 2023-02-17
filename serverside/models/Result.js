/**Result Schema */
/**Question Schema */

import mongoose, { Schema } from "mongoose";

// result model 

const resultModel = new Schema({
    username: {
        type: String,
    },
    result: {
        type: Array,
        default: []
    },
    score: {
        type: Number,
        default: 0
    },
    passed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Result', resultModel)