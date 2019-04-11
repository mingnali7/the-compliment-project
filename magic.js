let express = require("express")
let app = express();
let path = require('path')

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/1allure.html'))
})

app.listen(8000, function () {
  console.log("server is up")
})

app.get("/meow", function (req, res) {
  res.send("hello meow")
})