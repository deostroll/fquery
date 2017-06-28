const path = require('path')
const express = require('express')

let app = express()

let root = __dirname

app.use(express.static(path.join(root, 'pub')))
app.use(express.static(path.resolve(root, '..', 'dist')))

app.listen(3000, function(){
  console.log('listening...');
})
