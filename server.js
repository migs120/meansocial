var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

app.use('/api/posts', require('./controllers/api/posts'))
app.use( require('./controllers/static'))
// equivalent to: app.use('/', require('./controllers/static'))



app.listen(3000,'0.0.0.0', function () {
  console.log('Server listening on', 3000)
})



//curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\":\"dickeyxxx\", \"body\":\"node rules\"}" node-js-117893.nitrousapp.com/:3000/api/posts

