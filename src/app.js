require('dotenv').config()
const express = require('express')
const userModel = require('../model/note.model')


const app = express()
app.use(express.json())

app.post("/notes", async (req, res) => {
    const data = req.body
    
    try {
       await userModel.create({
            name: data.name,
            job: data.job,
            age:data.age
        })
        res.status(201).json({
            message: "Data Created Successfully"
        })
    } catch (error) {
        console.log(error);
    }
})
app.get("/notes", async (req, res) => {
    try {
        const data = await userModel.find()
         res.status(200).json({
            message: " Data Fetched Successfully",
            notes: data
         })
    } catch (error) {
        console.log(error);
    }
})


module.exports = app