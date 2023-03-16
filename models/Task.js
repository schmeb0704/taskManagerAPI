const mongoose = require('mongoose')

// create structure/model for data to be sent to database
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide task name"],
        trim: true,
        maxLength: [20, "Task name cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema) // mongoose.model(name_of_model, schema)