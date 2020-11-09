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
const jsonPath = __dirname + '/public/data/textContent.json'
const jsonText = fs.readFileSync(jsonPath)
let text = JSON.parse(jsonText)
let posts = text['posts']
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// APP GET HOME <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/',(req,res)=>{
  res.render('home',{
    paragraph: text.homeStartingContent,
    posts: posts
  })
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP GET ABOUT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/about', (req,res)=>{
  res.render('about',{
    paragraph: text.aboutContent
  })
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP GET CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/contact', (req,res)=>{
  res.render('contact',{
    paragraph: text.contactContent
  })
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP GET COMPOSE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/compose', (req,res)=>{
  res.render('compose')
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// APP POST COMPOSE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post('/compose',(req,res)=>{
  posts.push({
    title: req.body.title,
    content: req.body.text
  })
  text = JSON.stringify(text, null, 2)
  fs.writeFile(jsonPath, text, ()=>{console.log('Post added!')})
  res.redirect('/')
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// APP LISTEN ??????????????????????????????????????????????????????????????????
app.listen(3000, ()=>{
  console.log('Server started at port 3000')
})
// ?????????????????????????????????????????????????????????????????????????????