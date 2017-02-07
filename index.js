console.log("WOOT NODE IS AWESOME")
let express = require('express')
let server = express()
let bodyParser = require('body-parser')
let uuid = require('uuid')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.listen(8080, function () {
  console.log('THE SERVER IS RUNNING ON PORT 8080')
})

let db = {
  users: [{ id: '123', user: 'dave' }],
  tasks: []
}


const uuidV1 = require('uuid/v1');

// put not working //

server.put('/users/:id', function (req, res) {
  let userId = req.params.id
  let user = _findUserbyID(userID)
  if (user) {
    user.name = req.body.name
    return res.send(user)
  }
  return res.send(new Error("ID error!"))
})

//


server.post('/user', function (req, res) {

  let user = req.body
  user.id = uuidV1()
  db.users.push(user)
  console.log(db.users)

  // let username = req.body.username
  // let password = req.body.password
  // let id = uuid.v1()
  // let user = {
  //   name: username,
  //   password: password,
  //   id: id
  // }

  //send a reply from server to client //
  res.send(user)


})
server.get('/users/:id', function (req, res) {

  let userId = req.params.id

  console.log('here I am! ', req.params.id)
  console.log('user info ', db.users)

  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == userId) {
      return res.send(user)
    }
  }
  res.send(new Error('invalid ID!!'))
})





server.delete('/users/:id', function (req, res) {

  let userId = req.params.id
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == userId) {
      db.users.splice(i, 1)
      return res.send({ message: 'user deleted' })
    }
  }
   return res.send(new Error("ID error!"))
})

function _findUserbyID(id) {
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == id) {
      return user
    }
  }
}