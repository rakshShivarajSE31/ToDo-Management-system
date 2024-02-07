import React from 'react'
import { useEffect } from 'react'
import { getTodo, saveTodo, updateTodo } from '../services/TodoService'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false) 

    //Connect React to Add Todo REST API
    const navigate = useNavigate()

    //to get that particular id from the page to edit so to fetch that we need useParam Hook
    const { id } = useParams()

    function saveOrUpdateTodo(e){
        e.preventDefault()

        const todo = {title, description, completed}
        console.log(todo);

        if(id){

            updateTodo(id, todo).then((response) => {
                navigate('/todos')
            }).catch(error => {
                console.error(error);
            })

        }else{
            saveTodo(todo).then((response) => {
                console.log(response.data)
                navigate('/todos')
            }).catch(error => {
                console.error(error);
            })
        }
    }

    // If I click on Todo example Hi  I have to get the data in the update page so that I can edit it.
    // So for this 1st we need that particular id to edit, to get that, use useParam hook:

    function pageTitle(){
        if(id) {
            return <h2 className='text-center'>Update Todo</h2>
        }else {
            return <h2 className='text-center'>Add Todo</h2>
        }
    }

    // Connect REACT app to Get Todo REST API:
    useEffect( () => {
        if(id){
            getTodo(id).then((response) => {
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])


  return (
    <div className='container'>
        <br></br>
        <div className='d-flex justify-content-center mt-5'>
            <div className='card col-md-6'>
                {/* <h2 className='text-center mt-3 mb-4'>Add To-Do</h2> */}
                { pageTitle() }
                <div className='card-body'> 
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label' style={{ fontWeight: 'bold' }}>To-Do Title:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter ToDo Title'
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'style={{ fontWeight: 'bold' }}>To-Do Description:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter ToDo Description'
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'style={{ fontWeight: 'bold' }}>To-Do Completed:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>

                            </select>
                        </div>

                        <button className='btn btn-success' onClick={ (e) => saveOrUpdateTodo(e)}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default TodoComponent