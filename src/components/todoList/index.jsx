import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'

export default function TodoList({
  todoList,
  handleCompleteTodo,
  handleRemoveTodo,
}) {
  return (
    <ul className="todoList">
      {todoList.map((item, index) => (
        <li key={index} className={item.done ? 'todo completed' : 'todo'}>
          <span onClick={() => handleCompleteTodo(item.todo)}>{item.todo}</span>
          <button
            type="button"
            className="delete-todo"
            title={`Deletar ${item.todo}`}
            onClick={() => handleRemoveTodo(item.todo)}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
}
