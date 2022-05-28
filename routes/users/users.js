const express = require('express')
const userController = require('../../controllers/users/users')

const router = express.Router()

router.post('/signup', userController.signup) // Register user

router.get('/', userController.allusers) // To get all users

router.post('/signin', userController.signin) // with otp

router.post('/signup/varify', userController.varifyotp) // varify otp

router.put('/updateuserinfo/:id', userController.UpdateUser) // to update user info

router.put('/:id/follow', userController.followuser)  // follow route

router.put('/:id/unfollow', userController.unfollow) // unfollow route

module.exports = router

