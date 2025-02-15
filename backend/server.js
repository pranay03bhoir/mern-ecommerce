require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/dbConnection");
const productRoutes = require("./routes/product.route");
const categoryRoutes = require("./routes/category.route");
const imageRoutes = require("./routes/image.routes");
const userRoutes = require("./routes/user.routes");
const wishlistRoutes = require("./routes/wishlist.routes");
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/user", userRoutes);
app.use("/api/wishlist", wishlistRoutes);
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
