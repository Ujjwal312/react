const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { register} = require("../controller/register");
const {login}= require ("../controller/login");

router.post("/createUser", createUser);
router.post("/register",register);
router.post("/register/login",login);
router.get("/getallUsers", getUser);


module.exports = router;
