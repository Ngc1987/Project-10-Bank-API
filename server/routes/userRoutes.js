const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')



// Authentification
// S'inscrire
router.post('/signup', userController.createUser)
// Se connecter
router.post('/login', userController.loginUser)


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

// Supprimer utilisateur
router.delete("/:id", userController.deleteUser)

// Se déconnecter
// router.get("/logout", userController.logout)
    
// // Obtenir tous les utilisateurs
// router.get("/", userController.getAllUsers)
// // Obtenir un utilisateur par son id
// router.get("/:id", userController.getUserInfos)


module.exports = router
