const express = require("express");
const notesModel = require('../models/note.model');
const app = express();
app.use(express.json());


// const notes = [];
// app.get("/", (req, res)=>{
    // res.send("hello");
// })
// 

app.get("/notes", async(req, res)=>{
    const data = await notesModel.find()
    res.status(201).json({
        message: "fetched successfully",
        notes:data
    })
})

app.post("/notes", async (req, res)=>{
    const data = req.body;
    await notesModel.create({
        title:data.title,
        description: data.description
    })

    res.status(201).json({
        message: "data sent successfully"
    })
})
app.delete("/notes/:id", async(req, res)=>{
    const id = req.params.id;
    await notesModel.findByIdAndDelete({
        _id: id
    });
    res.status(200).json({
        message:"data deleted successfully"
    })
})

app.patch("/notes/:id", async(req, res)=>{
    const id = req.params.id;
    const description = req.body.description;
    await notesModel.findOneAndUpdate({_id: id},{description: description})
    res.status(201).json({
        message: "Updated Successfully"
    })
})

module.exports = app;