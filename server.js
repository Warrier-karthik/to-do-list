const express = require('express')

const app = express()

const indexRouter = require('./route/index.js')
const taskRouter = require('./route/newtask.js')

const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.set('views', __dirname+'/views')

app.use('/', indexRouter)
app.use('/new', taskRouter)

app.listen(port, (error) => {
    if(error) throw error
    console.log("Ready")
})