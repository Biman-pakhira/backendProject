const app = require("./src/app")
const connectDB = require(`./db/db`)

connectDB();
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server Has Been Created successfully on PORT:${PORT}`);
    
})