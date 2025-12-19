const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

const PORT = process.env.PORT || 8081;
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/Agriculture";

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection with better error handling
mongoose
  .connect(MONGODB_URL, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("[✅] MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("[❌] MongoDB connection failed:", error.message);
    console.log("[ℹ️] Get your connection string from MongoDB Compass:");
    console.log("    1. Open MongoDB Compass");
    console.log("    2. Copy the connection string from the connection screen");
    console.log("    3. Update MONGODB_URL in BACKEND/.env file");
    console.log(`[ℹ️] Current MONGODB_URL: ${MONGODB_URL}`);
  });

// Routes
const ProductsRouter = require("./routes/Products");
app.use("/products", ProductsRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`[🚀] Server running on port ${PORT}`);
});
