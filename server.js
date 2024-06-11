require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
// middleware express.json defined here
app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);
    // process.exit(0);
  });
});
