const mongoose = require(`mongoose`)

const modelSchema = new mongoose.Schema({
    name: String,
    job: String,
    age: Number
})

const userModel = mongoose.model("Random", modelSchema)

module.exports = userModel;