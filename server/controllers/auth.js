const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JsonDB, Config } = require("node-json-db");
const db = new JsonDB(new Config("myDataBase", true, false, "/"));

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    let userExist;

    try {
      userExist = await db.getData(`/${email}`);
    } catch (error) {
      // If the email doesn't exist in the database, it's a new user
      userExist = null;
    }

    if (userExist) {
      return res.status(409).json({
        message:
          "The email address you are trying to register is already in use. Please choose a different email address.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      firstname,
      lastname,
      email,
      hashedPassword,
    };
    await db.push(`/${email}`, newUser);
    res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userExist;

    try {
      userExist = await db.getData(`/${email}`);
    } catch (error) {
      // If the email doesn't exist in the database, it's a new user
      userExist = null;
    }

    if (userExist) {
      const { firstname, lastname, email, hashedPassword } = userExist;
      const isCorrect = await bcrypt.compare(password, hashedPassword);
      if (!isCorrect) {
        return res.status(401).json({
          message: "Incorrect Password",
          description: "Please enter correct password.",
        });
      } else {
        jwt.sign(
          { firstname, lastname, email },
          process.env.JWT_SECRET,
          {
            expiresIn: "3d",
          },
          (error, token) => {
            if (error) {
              return res.status(500).json({ message: error });
            }
            res.status(200).json({
              message: "Login Successful",
              token,
              userData: { firstname, lastname, email },
            });
          }
        );
      }
    } else {
      return res.status(404).json({
        message: "User not found. Please check your email and try again.",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const validateToken = (req, res) => {
  const { isTokenValidate } = req.body;

  if (isTokenValidate) {
    res.status(200).json({ message: "Successful." });
  } else {
    return res.status(400).json({ message: "Can not validate" });
  }
};

module.exports = { login, signup, validateToken };
