import {Sequelize} from 'sequelize'

const db = new Sequelize('task_app', 'federicomoneta', 'lolamoneta', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db 