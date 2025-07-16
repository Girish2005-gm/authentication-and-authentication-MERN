const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./models/db");
const bodyParser = require("body-parser");
const cors = require('cors')
const AuthRouter=require("./routes/AuthRoute")
const ProdctRoute=require("./routes/ProductRoute")
dotenv.config({ path: ".env" });
const connect=connection()


const PORT = process.env.PORT || 5000; 

app.use(bodyParser.json())
app.use(cors())


app.use("/auth",AuthRouter)
app.use("/product",ProdctRoute)

app.get("/ping",(req,res)=>{
    res.send("pong")
})
app.listen(PORT, () => {
  console.log(`Your port is ${PORT}`);
});
