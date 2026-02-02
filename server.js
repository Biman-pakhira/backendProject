const app = require("./src/app");
const connectDB = require("./db/db");

connectDB();
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT: ${PORT}`);
    
})

