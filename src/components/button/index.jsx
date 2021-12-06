import PropTypes from 'prop-types'

export default function Button({ type = 'button', children }) {
  return <button type={type}>{children}</button>
}

Button.propTypes = {
  type: PropTypes.string,
}
