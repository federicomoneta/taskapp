import db from '../database/db.js' //my database
import { DataTypes } from 'sequelize'; // datatypes that I'm gonna use later

//defining the model, I will only take title and description by the moment
const TaskModel = db.define('tasks', {
    name: { type: DataTypes.STRING}, 
    description: {type: DataTypes.STRING},
})

export default TaskModel


