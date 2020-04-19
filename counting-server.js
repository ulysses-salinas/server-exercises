const express = require('express')

const app = express()

var count = 0

app.post('/increment', function (req, res){
    
    console.log(count++)
    res.send('count is ' + count)
})
app.post('/decrement', function (req, res){
    
    console.log(count--)
    res.send('count is ' + count)
})

app.get('/value', function (req, res){
    
    console.log(count)
    res.send('count is ' + count)
})



app.listen(4050, function () {
    console.log('Counting Server is ON')
})