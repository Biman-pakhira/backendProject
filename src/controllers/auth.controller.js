const userModel = require(`.../model/note.model.js`)
const jwt = require(`jsonwebtoken`)

async function registration(req, res) {
    const{username, email, password} = req.body
    const user = await userModel.create({username, email, password})
    const token = jwt.sign({id: user._id},process.env.jwt_key)

    res.status(201).json({message:"Registration complete", user, token})
}
module.exports = { registration }