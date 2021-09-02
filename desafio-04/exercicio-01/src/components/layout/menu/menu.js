import * as S from './styles'

const Menu = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Links>{children}</S.Links>
    </S.Wrapper>
  )
}

export default Menu
