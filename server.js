#!/usr/local/bin/node

var express = require('express')

var app = express()
var PORT = process.argv[2] || 3000

app.use(express.static(__dirname + '/'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}.`)
})
