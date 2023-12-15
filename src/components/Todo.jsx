import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"


const Todo = () => {
    const [todo, setTodo] = useState([])
    const [editID, setEditId] = useState()
    const [value, setValue] = useState()
    const[isEditting, setIsEditting] = useState(false)

    const addTodo = (task) => {
        setTodo([...todo, {
            id: new Date().getTime(),
            task: task,
            edit:false,
        }])
    }

    const deleteTodo = (id) => setTodo(todo.filter((item)=> item.id !== id))

    // const editTask = (value, id) => todo.map((item)=>item.id === id ? {...item, task:value} : item) 
    // const editTask = (value, id) => todo.map((item)=>item.id === id ? {...item, task:value} : item) 
  
    const editItem = (id) => {
        const editedItem = todo.find((item)=>item.id===id)
        setValue(editedItem.task)
        setEditId(id);
        setIsEditting(true)
    }

  return (
    <div className="todo">
        <h1>Todo List</h1>
        <TodoForm 
        addTodo={addTodo} 
        value={value} 
        setValue={setValue}
        isEditting={isEditting}/>
        {todo.map((item)=>(<TodoList {...item} deleteTodo={deleteTodo} editItem={editItem}/>))}
        
    </div>
  )
}

export default Todo