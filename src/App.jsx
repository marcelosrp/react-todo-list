import { useState, useEffect } from 'react'
import { FaPlusCircle, FaTrash } from 'react-icons/fa'

import './styles/App.css'

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storageTodoList = localStorage.getItem('todos')
    return JSON.parse(storageTodoList) || []
  })
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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="todo-app">
      <div className="form-container">
        <form className="form-todo">
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Adicionar item a lista"
            className="input-todo"
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
            <li key={index} className={item.done ? 'todo completed' : 'todo'}>
              <span onClick={() => handleCompleteTodo(item.todo)}>
                {item.todo}
              </span>
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
      </div>
    </div>
  )
}

export default App
