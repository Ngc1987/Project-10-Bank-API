const userService = require('../services/userService')
const User = require('../database/models/userModel')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.createUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.createUser(req.body)
    response.status = 200
    response.message = 'User successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

const maxAge = 3 * 24 * 60 * 60 * 1000

module.exports.loginUser = async (req, res) => {
  let response = {}
  console.log(req, res)
  try {
    const responseFromService = await userService.loginUser(req.body)
    response.status = 200
    response.message = 'User successfully logged in'
    res.cookie("jwt", responseFromService, { httpOnly: true, maxAge })
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", {maxAge: 1});
  res.redirect("/")
}




module.exports.getUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getUserProfile(req)
    response.status = 200
    response.message = 'Successfully got user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.updateUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateUserProfile(req)
    response.status = 200
    response.message = 'Successfully updated user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserProfile - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


// Obtenir tous les utilisateurs
module.exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  return res.status(200).json(users)
}

// Obtenir un utilisateur unique grâce à l'id
module.exports.getUserInfos = async (req, res) => {

  console.log(req.params)

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Unknomn ID:" + req.params.id)
  }

  User.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log("Unknown ID: " + err)
  }).select("-password")
}


// Supprimer un utilisateur avec son Id
module.exports.deleteUser = async (req, res) => {

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Unknomn ID:" + req.params.id)
  }

  try {
    await User.remove({_id: req.params.id }).exec();
    res.status(200).json({ message: "Succesfully deleted."})
  }

  catch (err) {
    return res.status(500).json({ message: err})
  }

}


// Se connecter
// module.exports.login = async (req, res) => {
//     const {email, password} = req.body;

//     try {
//       const user = await User.login
//     }
// }