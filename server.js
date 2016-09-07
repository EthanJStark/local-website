const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/main', (request, response) => {
  response.render('main')
})

app.get('/gallery', (request, response) => {
  response.render('omi')
})


app.listen(process.env.PORT || 3000)
