const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    TaskType: {
        type: String,
        required: true
    },
    time: {
        type: String     
    },
    desc: {
        type: String
    }
})

module.exports = mongoose.model('Task', taskSchema)