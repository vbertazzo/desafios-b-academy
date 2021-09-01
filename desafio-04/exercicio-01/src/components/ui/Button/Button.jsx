import * as S from './styles'

const Button = ({ kind, children }) => {
  return <S.Button kind={kind}>{children}</S.Button>
}

export default Button
