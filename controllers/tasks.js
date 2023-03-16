const Task = require("../models/Task")
const asyncWrapper = require("../middleware/async")
const {createCustomError, CustomApiError} = require("../errors/custom-error")

const getAllTasks = asyncWrapper(
    async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).send({ tasks})
    }
) 

const createTask = asyncWrapper(
    async (req, res) => {
            const task = await Task.create(req.body)
            return res.status(201).json({ task })   
    }
) 

const getTask = asyncWrapper(
    async (req, res, next) => {
        const { id: taskID } = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        return res.status(200).json({ task })
    }
) 

const updateTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params
        const {name, completed} = req.body
        const updatedTask = await Task.findByIdAndUpdate(taskID, {name, completed}, {new: true, runValidators: true}) // await Task.findOneAndUpdate({_id: taskID})
        // const updatedTask = await Task.findOne({_id: taskID})
        return res.status(200).json({ task: updatedTask })
    }
)


const deleteTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params
        const toDelete = await Task.findByIdAndDelete(taskID) // await Task.findOneAndDelete({_id: taskID})
        if(!toDelete){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.json({success: true, msg: "task deleted", task: toDelete})
    }

)

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }