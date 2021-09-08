const Button = ({ kind, children }) => {
  return <button className={`button ${kind}`}>{children}</button>
}

export default Button
