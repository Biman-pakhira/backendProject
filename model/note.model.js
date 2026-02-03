const mongoose = require("mongoose")

const modelSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const userModel = mongoose.model("Random", modelSchema)

module.exports = userModel;