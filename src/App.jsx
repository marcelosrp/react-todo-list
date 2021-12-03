import { useState, useEffect, useRef } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import TodoList from './components/todoList'

import './styles/App.css'

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storageTodoList = localStorage.getItem('todos')
    return JSON.parse(storageTodoList) || []
  })
  const [todo, setTodo] = useState('')
  const [hasError, setHasError] = useState(false)
  const inputEl = useRef(null)

  const handleAddTodo = e => {
    e.preventDefault()

    if (todo === '') {
      setHasError(true)
      inputEl.current.focus()
      return false
    }

    setTodoList(prevState => [...prevState, { todo, done: false }])
    setTodo('')
    setHasError(false)
  }

  const handleChangeInputTodo = target => {
    setHasError(false)
    setTodo(target.value)
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
        <form
          className={hasError ? 'form-todo todo-error' : 'form-todo'}
          onSubmit={handleAddTodo}
        >
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Adicionar item a lista"
            className="input-todo"
            ref={inputEl}
            value={todo}
            onChange={({ target }) => handleChangeInputTodo(target)}
          />
          <button type="button">
            <FaPlusCircle />
          </button>
        </form>
      </div>

      <div className="todo-container">
        <TodoList
          todoList={todoList}
          handleRemoveTodo={handleRemoveTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </div>
  )
}

export default App
