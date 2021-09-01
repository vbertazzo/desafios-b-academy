import * as S from './styles'

const Content = ({ title, content }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        {content}
      </S.Content>
    </S.Wrapper>
  )
}

export default Content
