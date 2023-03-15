const getAllTasks = (req, res) => {
    res.status(200).json({tasks: []})
}

const createTask = (req, res) => {
    const {task} = req.body

    if(task){
        return res.status(200).json({success: true, tasks: [task]})
    } else {
        return res.status(401).json({success: false, msg: "Please enter a task"})
    }
}

const getTask = (req, res) =>{
    const {id: taskID} = req.params
    const task = {name: "feed dog", id: "1w2e3r4t"}
    if(taskID){
        return res.status(200).json({task})
    } else{
        return res.status(401).json({success: false, msg: "Please enter a task"})
    }
}

const updateTask = (req, res)=>{
    const {id: taskID} = req.params
    
    if(taskID){
        return res.status(200).json({success: true, msg: "task updated"})
    } else{
        return res.status(401).json({success: false, msg: "Please enter a task"})
    }
}

const deleteTask = (req, res)=>{
    const {id: taskID} = req.params
    
    if(taskID){
        return res.status(200).json({success: true, msg: "task deleted"})
    } else{
        return res.status(401).json({success: false, msg: "Please enter a task"})
    }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}