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






// APP LISTEN ??????????????????????????????????????????????????????????????????
app.listen(3000, ()=>{
  console.log('Server started at port 3000')
})
// ?????????????????????????????????????????????????????????????????????????????