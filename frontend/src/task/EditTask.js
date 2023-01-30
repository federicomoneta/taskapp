import axios from "axios"
import {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8080/tasks/'

const EditTask = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
    
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            description: description
        })
        navigate('/')
    }

    useEffect(() => {
        getTaskById()
    },[])

    const getTaskById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data[0].name)
        setDescription(res.data[0].description)
    }

    return(   
        <div>
            <h3> Modify a new task </h3>
            <form className='' onSubmit={update}>
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

                <button type='submit' className="btn btn-primary">Save new changes</button>
            </form>
        </div>
    )
}

export default EditTask