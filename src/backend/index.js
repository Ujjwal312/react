const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const path=require("path");
const PORT = process.env.PORT || 5000;


// app.use(express.static(path.join(__dirname, "./cliend/build")))
// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname, "./cliend/build/index.html"))
// })
app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());
// app.use(cors());
app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();


app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
