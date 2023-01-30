import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8080/tasks/'

const ShowTasks = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        getTasks()
    }, [])
    
    //Request all blogs
    const getTasks = async () => {
        const res = await axios.get(URI)
        setTasks(res.data)
    }
    
    //Delete a blog
    const deleteTask = async (id) => {
        const res = await axios.delete(URI+id)
        getTasks()
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link className='btn btn-primary mt-2 mb-2' to='/create'>Create a new one</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Task name</th>
                                <th>Description</th>
                                <th>Actions availables</th>
                            </tr>
                        </thead>
                        <tbody>
                             { tasks?.map( (task) => (
                                <tr key={task.id}>
                                    <td className="text-start">{task.name}</td>
                                    <td className="text-start">{task.description}</td>
                                    <td>
                                        <div className='btn btn-group'>
                                            <Link to={'/edit/' + task.id } className='btn btn-info' >Modify</Link>
                                            <button onClick={() => deleteTask(task.id)} className='btn btn-danger'>Delete</button> 
                                        </div>

                                    </td>
                                </tr>
                            ))  } 
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowTasks