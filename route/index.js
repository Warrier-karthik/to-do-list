const express = require('express')
const date = new Date()
const router = express.Router()
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const Task = require('../model/Task')

router.get('/', async (req, res) => {
    const task = new Task()
    const tasks = await Task.find({})
    res.render('index.ejs', {mnt: month[date.getMonth()]+' '+date.getDate(), task: task, tasks: tasks})
})


module.exports = router 