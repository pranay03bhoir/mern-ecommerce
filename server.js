require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/dbConnection");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoute");
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
