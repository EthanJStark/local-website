const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  const carouselImages = [
    '/images/pic1.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
  ]
  response.render('index', {
    carouselImages: carouselImages
  })
})

app.get('/layout', (request, response) => {
  response.render('layout')
})

app.get('/main', (request, response) => {
  response.render('main')
})

app.get('/gallery', (request, response) => {
  response.render('omi')
})


app.listen(process.env.PORT || 3000)
