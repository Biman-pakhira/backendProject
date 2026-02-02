const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://Guddu:5E18C6wAEfT6WHkR@cluster0.y7sbyo6.mongodb.net/")
        console.log("Database Connected Succesfully");
        
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports=connectDB