import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Input = (props, ref) => (
  <input
    placeholder="Adicionar item a lista"
    className="input-todo"
    ref={ref}
    type={props.type || 'text'}
    name={props.id}
    id={props.id}
    value={props.todo}
    onChange={({ target }) => props.handleChangeInputTodo(target)}
  />
)

export default forwardRef(Input)

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
  handleChangeInputTodo: PropTypes.func.isRequired,
}
