import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider({ children }) {

    const [data, updateData] = useState([])
    const [note, updateNote] = useState("")
    const [completed, updateCompleted] = useState(false)

    const completedStyle = completed ? {
        textDecoration: 'line-through'
    } : {
        textDecoration: 'none'
    }


    useEffect(() => {
        axios.get(process.env.REACT_APP_TODO_LIST)
            .then(res => updateData(res.data))
    })



    const deleteTodo = (note) => {
        axios.post(process.env.REACT_APP_DELETE_TODO_LIST, {
            note
        })
    }

    const completedTodo = (note) => {
        updateCompleted(prev => !prev)
        axios.post(process.env.REACT_APP_COMPLETED_TODO_LIST, {
            note
        })

    }

    //createTodoList

    const createdTodo = () => {
        axios.post(process.env.REACT_APP_CREATED_TODO_LIST, {
            note,
            completed: false
        })
    }

    return (
        <Context.Provider value={{
            data,
            updateData,
            note,
            updateNote,
            completed,
            updateCompleted,
            completedStyle,
            deleteTodo,
            completedTodo,
            createdTodo
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
