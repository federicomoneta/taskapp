//EXPRESS SERVER CONFIGS
import express  from "express"
import cors from 'cors'
import db from "./database/db.js"
import taskRoutes from './routes/routes.js' //taskRoutes is just a name that I´ve selected for the routes file

const app = express()

app.use(cors())
app.use(express.json())

//Naming the first group of resources
app.use('/tasks', taskRoutes)

try {
    await db.authenticate()
    console.log("Succesfully connected to the DB")
} catch (e) {
    console.log("el error es: ${e}")
}

//Just to know if everything is OK
app.get('/', (req,res) => {
    res.send('Helloooo')
})

// I want the app listen to the port 8000
app.listen(8080, ()=>{
    console.log("My server is UP and running in http://localhost:8080/")
})

