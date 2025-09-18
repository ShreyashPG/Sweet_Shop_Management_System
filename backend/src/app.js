const express=require("express");
const app=express();
require("dotenv").config();

const cors = require("cors");
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running at http://localhost:5000`);
  });
module.exports = app;