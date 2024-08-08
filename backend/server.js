const express = require("express");
const colors =require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroutes = require('./routes/rootroutes');
const connectDB = require("./config/db");
const productroutes = require("./routes/productroutes");
const getproductcontroller = require("./controllers/Products/getproductcontroller")


const PORT = process.env.PORT || 6000 || 7000;
connectDB();
const app = express();



//connectDB()
//const app = express();

app.use("/", rootroutes)
    
app.use("/fashion-trends",productroutes);

app.listen(PORT,()=>{
console.log(`server is running on http://localhost:${PORT}`.bgBlue.white);
});

        