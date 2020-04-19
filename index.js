const express = require('express')

const app = express()

app.listen(5050, function () {
    console.log('this is a test!')
})

app.get('/ping', function (req, res){
    console.log('Let us play:')
    res.send('<h1>PONG</h1>')
})