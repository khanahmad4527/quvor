const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes.js");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening to server on PORT ${PORT}`);
});
