
const TodoForm = ({addTodo, value, setValue, isEditing}) => {
   

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="todoform">
            <input type="text" className="input" onChange={(e)=>setValue(e.target.value)} value={value}/>
            <button type="submit" className="btn">Add Task</button>
        </form>
    </div>
  )
}

export default TodoForm