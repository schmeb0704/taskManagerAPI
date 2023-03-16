const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).send({ tasks})
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        return res.status(201).json({ task })
    } catch (err) {
        console.log(err.errors.name.properties.message);
        const { message } = err.errors.name.properties

        if (message.includes("provide tasks")) {
            return res.status(401).json({ success: false, msg: "Please enter a task" })
        } else if (message.includes("characters")) {
            return res.status(401).json({ success: false, msg: "Task name cannot be more than 20 characters" })

        } else{
            return res.status(500).json({ success: false, msg: "Internal server error", error: err.errors })
        }
    }
}

const getTask = async (req, res) => {
    const { id: taskID } = req.params

    try{
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(404).json({success: false, msg: `No task with ID: ${taskID}`})
        }
        return res.status(200).json({ task })

    }catch(err){
        return res.status(500).json({success: false, error: err})
    }
}

const updateTask = async (req, res) => {
    const { id: taskID } = req.params
    const {name, completed} = req.body

    try{
        const updatedTask = await Task.findByIdAndUpdate(taskID, {name, completed}, {new: true, runValidators: true}) // await Task.findOneAndUpdate({_id: taskID})
        // const updatedTask = await Task.findOne({_id: taskID})
        return res.status(200).json({ task: updatedTask })
    }catch(err){
        return res.status(500).json({success: false, error: err})

    }

}

const deleteTask = async (req, res) => {
    const { id: taskID } = req.params

    try{
        const toDelete = await Task.findByIdAndDelete(taskID) // await Task.findOneAndDelete({_id: taskID})

        if(!toDelete){
            return res.status(404).json({success: false, msg: `No task with ID: ${taskID}`})
        }

        res.json({success: true, msg: "task deleted", task: toDelete})
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, error: err})
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }