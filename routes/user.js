const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utility/wrapAsync");
const passport = require("passport");
const { saveRedirect } = require("../middleware.js");
const userController = require("../controllers/users.js");


//combine routers
router.route("/signup")
//Post Router / Send request for user
.post(wrapAsync(userController.signup))
.get(userController.renderSignupForm)


router.route("/login")
.get(userController.renderLoginForm)
//Logged in router
.post(
  saveRedirect,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
)


// Logout router
router.get("/logout", userController.logout);

module.exports = router;
