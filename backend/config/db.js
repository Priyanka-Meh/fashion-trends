const mongoose  = require("mongoose")
const colors = require('colors');

const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // res.status(200).send({
        //     message: "Database connected"
        // })
        console.log(`Database is connected`.bgBlue.white);
    }
    catch(error)
    {
        // res.status(504).send({
        //     message:`Internal Server Error ${error}`,
        //     success:false,
        //     Description: "Database not connected"

        // })
        console.log(`Error Occured ${error}` .bgRed.white);

    }
    
};
module.exports = connectDB;