//Declares the necessary imports
const express = require("express")
const userCtrl = require("./user_controller.js")

//Declaration of all the routes to make the requests
const router = express.Router()

//Routes
router.route("/User").post(userCtrl.apiGetUserByEmail)
router.route("/CreateUser").post(userCtrl.apiCreateUser)
router.route("/UpdateUser").post(userCtrl.apiUpdateUser)

module.exports = router