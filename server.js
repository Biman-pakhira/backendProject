require('dotenv').config()
const app = require("./src/app");
const connectDB = require("./db/db");

connectDB();
const PORT = 8000;
app.listen(PORT,()=>{
    try {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        
    } catch (error) {
        console.log(error);
    }
    
})

