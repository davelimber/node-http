console.log("WOOT NODE IS AWESOME")
let express = require('express')
let server = express()
let bodyParser = require('body-parser')
let uuid = require('uuid')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// server.post('/users', function(req, res){

//   let username = req.body.username
//   let password = req.body.password

//   if(username == 'JakeTheGreat' && password == '123Password!'){
//     return res.send('YOU HAVE SUCCESSFULLY LOGGED IN Good Job')
//   }

//   return res.send('IM SORRY THAT IS INCORRECT')
// })



// server.get('/', function(req, res){
//   res.send({woot: 'node is awesome'})
// })

// server.get('/captain', function(req, res){
//   res.sendFile(__dirname + '/category-captain.jpg')
// })


server.listen(8080, function () {
  console.log('THE SERVER IS RUNNING ON PORT 8080')
})

let db = {
  users: [{ id: '123', user: 'dave' }],
  tasks: []
}


// db.users.user = 'dave';
// db.users.user.id = '123';
const uuidV1 = require('uuid/v1');

// let uuid = require('uuid')

server.post('/user', function (req, res) {
  //YOUR CODE HERE TO SAVE THE REQ.BODY TO THE FAKEDB USERS
  //YOU WILL WANT TO ENSURE THAT EACH USER GETS A UNIQUE ID
  //ITS EASY WITH A NODE PACAKGE NAMED UUID
  let user = req.body
  // let password = req.body




  //let user = ...... GET THE DATA FROM THE REQ.BODY

  user.id = uuidV1()
  // console.log(user)

  //NOW ADD YOUR USER TO THE db.users

  db.users.push(user)
  console.log(db.users)

  //send a reply from server to client //
  res.send(user)


})
server.get('/users/:id', function (req, res) {
  //NOTICE THE :id ^^^ THis is considered a route parameter
  //You can get it through the req
  let userId = req.params.id
  console.log('here I am! ', req.params.id)
  console.log('user info ', db.users)
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == userId) {
      return res.send(user)
    }
  } res.send(new Error('invalid ID!!'))
})



//GET THE USER FROM THE FAKE DB AND SEND THE OBJECT TO THE CLIENT

server.put('/users/:id', function (req, res) {
  //FIND THE USER BY ID
  let userId = req.params.id
  let user = _findUserbyID(userID)
  if (user) {
    user.name = req.body.name
    return res.send(user)
  }
  return res.send("error!")


  //ALLOW THE USER OBJECT TO BE EDITED WITH THE DATA FROM REQ.BODY
  //CAUTION DO NOT ALLOW THE USER.ID TO BE MODIFIED BY THE REQ.BODY
})
//IMPORTANT NOTE DELETE METHODS CANNOT CONTAIN A REQUEST BODY
server.delete('/users/:id', function (req, res) {


  //FIND THE USER BY ID
  let userId = req.params.id
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == userId) {
      db.users.splice(i, 1)
      return res.send({message: 'user deleted'})
    }
  }
  
  //REMOVE THE USEROBJ FROM THE DB.USERS
})

function _findUserbyID (id) {
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user == id) {
      return user
    }
  }
}