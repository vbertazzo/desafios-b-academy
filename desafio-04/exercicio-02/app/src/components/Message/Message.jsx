import * as S from './styles'

const Message = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Message>{children}</S.Message>
    </S.Wrapper>
  )
}

export default Message
