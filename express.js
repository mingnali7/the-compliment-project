var {
  Client
} = require('pg');
let express = require("express")
var mustacheExpress = require('mustache-express');
let path = require('path')
var bodyParser = require('body-parser')


// make an array that has 10 compliments
let compArray = ["you're smart", "you're beautiful", "you're handsome"];

// establish the express thing
let app = express();

// body parser stuff
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// establish the mustache thing
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

// getting database
var client = new Client({
  database: 'compliment'
  // connectionString: process.env.DATABASE_URL,
  // ssl: true,
});

client.connect();



app.get("/", function (req, res) {

  res.sendFile(path.join(__dirname + '/1allure.html'))
})


app.get("/2", function (req, res) {
  client.query("SELECT message FROM posts;", function (err, res1) {
    if (err) {
      console.log(err)
    }
    let randomNum = Math.floor(Math.random() * res1.rows.length)
    let oldComp = res1.rows[randomNum];
    // console.log(oldComp)
    // const keys = Object.keys(oldComp);
    // const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    // const item = oldComp[randomIndex];
    console.log(oldComp);
    // client.end()
    res.render('2compliment', {
      old: oldComp
    })
  })
  //pick a random index for the compArray
  // let randomNum = Math.floor(Math.random() * compArray.length);
  // let compliment = compArray[randomNum];
  // // feed the random compliment into {{compliment}} in 2compliment.html
  // res.render('2compliment', {
  //   compliment: compliment
  // })
  // res.sendFile(path.join(__dirname + '/2compliment.html'))
})

app.get("/3", function (req, res) {
  res.sendFile(path.join(__dirname + '/3question.html'))
})
app.get("/meow", function (req, res) {
  res.sendFile(path.join(__dirname + '/3acool.html'))
})

app.post("/post", function (req, res) {
  let newpost = req.body.newcomp
  client.query('INSERT INTO posts (message) VALUES ($1)', [newpost], function (err, res) {
    if (err) {
      console.log(err)
    }
    console.log("succeed")
  })

  res.render('5thankyou', {
    post: req.body.newcomp
  })

})

app.get("/4", function (req, res) {
  res.sendFile(path.join(__dirname + '/4typing.html'))
})

app.get("/5", function (req, res) {
  res.sendFile(path.join(__dirname + '/5thankyou.html'))
})

app.listen(process.env.PORT || 8000, function () {
  console.log("server is up")
})