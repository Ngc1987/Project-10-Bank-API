const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')



// Authentification
// S'inscrire
router.post('/signup', userController.createUser)
// Se connecter
router.post('/login', userController.loginUser)
// Se déconnecter
router.get("/logout", userController.logout)


router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)


router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

// Obtenir tous les utilisateurs
router.get("/", userController.getAllUsers)
// Obtenir un utilisateur par son id
router.get("/:id", userController.getUserInfos)

// Supprimer utilisateur
router.delete("/:id", userController.deleteUser)

module.exports = router
