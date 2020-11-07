// CONFIG  =====================================================================
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
// =============================================================================

// GLOBAL VARS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsonText = fs.readFileSync(__dirname + '/public/data/textContent.json')
const text = JSON.parse(jsonText)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// APP GET HOME <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/',(req,res)=>{
  res.render('home',{paragraph: text.homeStartingContent})
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP GET ABOUT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/about', (req,res)=>{
  res.render('about',{paragraph: text.aboutContent})
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// APP GET CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/contact', (req,res)=>{
  res.render('contact',{paragraph: text.contactContent})
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP GET COMPOSE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/compose', (req,res)=>{
  res.render('compose')
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP POST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post('/',(req,res)=>{
  res.redirect('/')
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// APP LISTEN ??????????????????????????????????????????????????????????????????
app.listen(3000, ()=>{
  console.log('Server started at port 3000')
})
// ?????????????????????????????????????????????????????????????????????????????