const express = require('express')
const date = new Date()
const router = express.Router()
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const Task = require('../model/Task')
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
router.get('/', async (req, res) => {
    const task = new Task()
    const tasks = await Task.find({})
    let index = 1
    
    res.render('index.ejs', {mnt: month[date.getMonth()]+' '+date.getDate(), task: task, tasks: tasks, index:index, day: Days[date.getDay()-1]})
})


module.exports = router 