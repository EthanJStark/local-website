const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  const carouselImages = [
    '/images/index1.jpg',
    '/images/index2.jpg',
    '/images/index3.jpg',
  ]
  const events = [
    {
      imageUrl: "/event1.png",
      title: "IHO WORKTRADE INFO SESSION – Q4!",
    },
    {
      imageUrl: "/event1.png",
      title: "COCAP 2016 – RADICAL REDISTRIBUTION OF WEALTH THROUGH IMPACT INVESTING",
    },
    {
      imageUrl: "/event1.png",
      title: "THE SWEETWATER SESSIONS, VOL. 5 “BLACK IS BLUE”",
    },
    {
      imageUrl: "/event1.png",
      title: "CHRISTEN LIEN CONCERT – ELPIS IS COMING",
    },
  ]
  response.render('index', {
    carouselImages: carouselImages,
    events: events,
  })
})

app.get('/footer', (request, response) => {
  response.render('footer')
})

app.get('/main', (request, response) => {
  response.render('main')
})

app.get('/gallery', (request, response) => {
  response.render('omi')
})


app.listen(process.env.PORT || 3000)
