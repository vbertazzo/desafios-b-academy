const Button = props => {
  const { kind, children } = props
  return <button className={`button ${kind}`}>{children}</button>
}

export default Button
