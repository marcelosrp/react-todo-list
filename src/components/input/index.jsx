import PropTypes from 'prop-types'

export default function Input({
  type = 'text',
  id,
  todo,
  handleChangeInputTodo,
}) {
  return (
    <input
      placeholder="Adicionar item a lista"
      className="input-todo"
      type={type}
      name={id}
      id={id}
      value={todo}
      onChange={({ target }) => handleChangeInputTodo(target)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
  handleChangeInputTodo: PropTypes.func.isRequired,
}
