const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    brand:String,release:Number,plate_number:String
})

module.exports = mongoose.model("Car", CarSchema)