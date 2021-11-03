const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://nsvy:<password>@cluster0.5kgho.mongodb.net/dream-job-finder' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose