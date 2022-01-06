const mongoose = require('mongoose')
const Schema = mongoose.Schema

const astronomyItemSchema = new Schema({
    title: String,
    imageURL: String,
    description: String
})

const AstronomyItem = mongoose.model("AstronomyItem", astronomyItemSchema)
module.exports = AstronomyItem
