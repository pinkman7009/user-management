const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const userRoutes = require("./backend/routes/userRoutes");
const connectDB = require("./backend/config/db");
const errorHandler = require("./backend/middleware/error");

// Load env vars
dotenv.config({
  path: "./backend/config/config.env",
});

// Connecting to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Mounting router
app.use("/api/v1/users", userRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Listening on port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
