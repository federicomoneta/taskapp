import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8080/tasks/'

const CreateTask = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        axios.post(URI, {name: name, description: description})
        navigate('/')
    }

    return(
        <div>
            <h3> Modify this task </h3>
            <form className='' onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title/Name</label>
                    <input 
                        value={name} 
                        onChange={ (e) => {setName(e.target.value)}}
                        type='text'
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        value={description} 
                        onChange={ (e) => {setDescription(e.target.value)}}
                        type='text'
                        className='form-control'/>
                </div>

                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
 )
}

export default CreateTask
