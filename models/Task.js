const mongoose = require('mongoose')

// create structure/model for data to be sent to database
const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
}) 

module.exports = mongoose.model("Task", TaskSchema) // mongoose.model(name_of_model, schema)