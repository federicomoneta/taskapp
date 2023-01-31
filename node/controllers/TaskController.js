import TaskModel from "../models/TaskModel.js";

// Methods

// Create one task
export const createTask = async (req, res) => {
    try {
         await TaskModel.create(req.body)
         res.json({
            "message": "Creation Successfully :D"
        })
    } catch (e) {
        res.json( {message: e.message} )
    }
}

// Retrieve all my tasks 
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.findAll()
        res.json(tasks)
    } catch (e) {
        res.json( {message: e.message} )
    }
}

// Retrieve only one task
export const getTask = async (req,res) => {
    try {
        const task = await TaskModel.findAll({
            where: {id: req.params.id}
        })
        res.json(task)
    } catch (e) {
        res.json( {message: e.message} )
    }
}

// Update a task
export const updateTask = async (req,res) => {
    try {
        TaskModel.update(req.body, { 
            where: {id: req.params.id}
        })
        res.json({
            "message": "Successfully Updated :P"
        })
    } catch (e) {
        res.json( {message: e.message} )
    }
}

// Delete a task
export const deleteTask = async (req,res) => {
    try {
        TaskModel.destroy({ 
            where: {id: req.params.id}
        })
        res.json({
            "message": "Successfully Deleted :O"
        })
    } catch (e) {
        res.json( {message: e.message} )
    }
}