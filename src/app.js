const express = require("express");

const app = express();

app.use(express.json());
const notes = [];
app.get("/", (req, res)=>{
    res.send("hello");
})


app.get("/notes", (req, res)=>{
    res.status(201).json({
        message: "fetched successfully",
        notes:notes
    })
})

app.post("/notes", (req, res)=>{
    notes.push(req.body)
    res.status(200).json({
        message:"data sent successfully"
    })
})

module.exports = app;