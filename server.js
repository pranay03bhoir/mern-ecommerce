require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/dbConnection");
const app = express();

app.use(express.json());
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
