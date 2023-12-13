import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";


const TodoList = ({id,task, deleteTodo, editItem}) => {
  return (
    <div className='list'>
      <p>{task}</p>
      <div>
      <CiEdit className="edit" onClick={()=>editItem(id)}/>
      <FaTrashAlt className="delete" onClick={()=>deleteTodo(id)} />
      </div>
    </div>
  )
}

export default TodoList