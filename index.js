console.log("WOOT NODE IS AWESOME")
let express = require('express')
let server = express()
let bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.post('/users', function(req, res){
  
  let username = req.body.username
  let password = req.body.password

  if(username == 'JakeTheGreat' && password == '123Password!'){
    return res.send('YOU HAVE SUCCESSFULLY LOGGED IN Good Job')
  }

  return res.send('IM SORRY THAT IS INCORRECT')
})



server.get('/', function(req, res){
  res.send({woot: 'node is awesome'})
})

server.get('/captain', function(req, res){
  res.sendFile(__dirname + '/category-captain.jpg')
})


server.listen(8080, function(){
  console.log('THE SERVER IS RUNNING ON PORT 8080')
})












