import * as S from './styles'

const Link = ({ to, children, active }) => {
  return (
    <S.Link href={to} active={active}>
      {children}
    </S.Link>
  )
}

export default Link
