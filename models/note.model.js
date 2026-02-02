const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
    title: String,
    description: String
})

const notesModel = mongoose.model("notes", modelSchema);

module.exports=notesModel