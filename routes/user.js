// IMPORT THE MODULES
const express = require("express");
const passport = require("passport");
const router = express.Router();

// IMPORT THE USER CONTROLLERS
const UserController = require("../controllers/UserController");

router.get("/login", UserController.login);


router.get("/SignUp", UserController.signup);


router.get("/SignOut", passport.checkAuthentication, UserController.signout);


router.post("/create", UserController.CreateUser);


router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/login" }),
  UserController.CreateSession
);

module.exports = router;
