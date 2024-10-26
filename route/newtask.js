const express = require('express')
const router = express.Router()
const date = new Date()
const Task = require('../model/Task')

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
router.get('/', (req, res) => {
    res.render('newTask.ejs')
})

router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.Title,
        TaskType: req.body.Task,
        time: req.body.time,
        desc: req.body.desc
    })
    const saveTask = await task.save()
    res.redirect('/')
})
module.exports = router