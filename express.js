let express = require("express")
let path = require('path')

let app = express();


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/1allure.html'))
})


app.get("/2", function (req, res) {
  res.sendFile(path.join(__dirname + '/2compliment.html'))
})

app.get("/3", function (req, res) {
  res.sendFile(path.join(__dirname + '/3question.html'))
})

app.get("/4", function (req, res) {
  res.sendFile(path.join(__dirname + '/4typing.html'))
})

app.get("/5", function (req, res) {
  res.sendFile(path.join(__dirname + '/5thank-you.html'))
})

app.listen(8000, function () {
  console.log("server is up")
})