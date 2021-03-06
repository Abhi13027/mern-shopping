const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("The server is up and running".yellow.bold);
});
