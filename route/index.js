const express = require('express')
const date = new Date()
const router = express.Router()
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

router.get('/', (req, res) => {
    res.render('index.ejs', {mnt: month[date.getMonth()]+' '+date.getDate()})
})

module.exports = router