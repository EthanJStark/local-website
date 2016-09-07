const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/layout', (request, response) => {
  response.render('layout')
})

app.get('/main', (request, response) => {
  response.render('main')
})

app.listen(process.env.PORT || 3000)
