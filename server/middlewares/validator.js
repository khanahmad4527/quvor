const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JsonDB, Config } = require("node-json-db");
const db = new JsonDB(new Config("myDataBase", true, false, "/"));

const validator = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
      if (error) {
        return res.status(400).json({ message: error });
      }

      let userExist;

      try {
        userExist = await db.getData(`/${decoded?.email}`);
      } catch (error) {
        userExist = null;
      }

      if (userExist) {
        req.body.isTokenValidate = true;
        next();
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = { validator };
