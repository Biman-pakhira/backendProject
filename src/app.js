require('dotenv').config()
const express = require('express')
const userModel = require(`../model/note.model`)
const app = express()

app.use(express.json())

// app.post("/notes", async (req, res) => {
    // const data = req.body
    // try {
    //    await userModel.create({
            // name: data.name,
            // job: data.job,
            // age:data.age
        // })
        // res.status(201).json({
            // message: "Data Created Successfully"
        // })
    // } catch (error) {
        // console.log(error);
    // }
// })
// app.get("/notes", async (req, res) => {
    // try {
        // const data = await userModel.find()
        //  res.status(200).json({
            // message: " Data Fetched Successfully",
            // notes: data
        //  })
    // } catch (error) {
        // console.log(error);
    // }
// })
// app.delete("/notes/:id", async (req, res) => {
    // try {  
        // const id = req.params.id;
        // await userModel.findByIdAndDelete({
            // _id: id
    //   })
    //   res.status(201).json({
        //   message:"Data Deleted Successfully"
    // })
    // } catch (error) {
        // console.log(error);
    // }
// })
// 
// app.patch("/notes/:id", async (req, res) => {
    // try {  
        // const id = req.params.id;
        // const job = req.body.job
        // await userModel.findByIdAndUpdate({
            // _id: id
    //   },{
            // job: job
    //   })
    //   res.status(201).json({
        //   message:"Data Deleted Successfully"
    // })
    // } catch (error) {
        // console.log(error);
    // }
// })
// 

module.exports = app