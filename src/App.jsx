import { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Input from './components/input'
import Button from './components/button'
import TodoList from './components/todoList'

import './styles/App.css'

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storageTodoList = localStorage.getItem('todos')
    return JSON.parse(storageTodoList) || []
  })
  const [todo, setTodo] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleAddTodo = e => {
    e.preventDefault()

    if (todo === '') {
      setHasError(true)
      return
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
          <Input
            id="new-todo"
            todo={todo}
            handleChangeInputTodo={handleChangeInputTodo}
          />
          <Button type="submit">
            <FaPlusCircle />
          </Button>
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
