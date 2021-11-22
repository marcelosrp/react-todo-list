import { useState } from 'react'
import { FaPlusCircle, FaTrash, FaRegCheckSquare } from 'react-icons/fa'

import './styles/App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
    setTodoList(prevState => [...prevState, { todo, done: false }])
    setTodo('')
  }

  const handleRemoveTodo = todo => {
    setTodoList(todoList.filter(item => item.todo !== todo))
  }

  const handleCompleteTodo = todo => {
    setTodoList(
      todoList.map(item =>
        item.todo === todo ? { ...item, done: true } : item,
      ),
    )
  }

  return (
    <div className="todo-app">
      <div className="form-container">
        <form className="form-todo">
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Adicionar item a lista"
            className="todo-input"
            value={todo}
            onChange={({ target }) => setTodo(target.value)}
          />
          <button onClick={handleAddTodo} type="button">
            <FaPlusCircle />
          </button>
        </form>
      </div>

      <div className="todo-container">
        <ul className="todoList">
          {todoList.map((item, index) => (
            <div key={index} className={item.done ? 'todo completed' : 'todo'}>
              <li>{item.todo}</li>
              <button
                type="button"
                className="delete-todo"
                title={`Deletar ${item.todo}`}
                onClick={() => handleRemoveTodo(item.todo)}
              >
                <FaTrash />
              </button>
              <button
                type="button"
                className="complete-todo"
                title={`Completar ${item.todo}`}
                onClick={() => handleCompleteTodo(item.todo)}
              >
                <FaRegCheckSquare />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
