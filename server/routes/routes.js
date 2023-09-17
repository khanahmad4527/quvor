const express = require("express");
const router = express.Router();

/****************** controllers ***********************/
const { login, signup, validateToken } = require("../controllers/auth");

/********************** middleware ***********************/
const { validator } = require("../middlewares/validator");

/********************** user routes *****************************/
router.post("/user/auth/register", signup);
router.post("/user/auth/login", login);
router.get("/validate-token", validator, validateToken);

module.exports = { router };
