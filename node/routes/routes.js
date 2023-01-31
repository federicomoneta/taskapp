import express from 'express'
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/TaskController.js'

const router = express.Router()

//GET METJHODS
router.get('/', getAllTasks)
router.get('/:id', getTask)

//POST METHODS
router.post('/', createTask)

//PUT METHODS
router.put('/:id', updateTask)

//DELETE METHODS
router.delete('/:id', deleteTask)

export default router