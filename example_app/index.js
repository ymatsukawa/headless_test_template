const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const port = 3000
const host = '0.0.0.0'

const resourceDir = '/' + __dirname + '/resources/'

app.use(session({
  secret: 'secret for test',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  req.session
  if(!req.session.loggedIn) {
    res.sendFile(resourceDir + '401.html')
  } else {
    res.sendFile(resourceDir + 'home.html')
  }
})

app.get('/login', (req, res) => {
  req.session.loggedIn = false
  res.sendFile(resourceDir + 'login_form.html')
})

app.post('/login', (req, res) => {
  // detail login process is omitted
  req.session.loggedIn = true
  res.redirect('/')
})

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
