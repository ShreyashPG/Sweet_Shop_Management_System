const express=require("express");
const app=express();
require("dotenv").config();
const authRouter=require("./routes/Auth")
const SweetRouter=require("./routes/SweetsRoute")
const InventoryRouter=require("./routes/InventoryRoute")
const cors = require("cors");

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.LOCAL_URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/sweets",SweetRouter)
app.use("/api/sweets",InventoryRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running at http://localhost:5000`);
  });
module.exports = app;