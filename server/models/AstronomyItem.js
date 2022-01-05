const mongoose = require('mongoose')
const Schema = mongoose.Schema

const astronomyItemSchema = new Schema({
    id: Number,
    amount: Number,
    vendor: String,
    category: String
})

const AstronomyItem = mongoose.model("AstronomyItem", astronomyItemSchema)
module.exports = AstronomyItem
