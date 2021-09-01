import * as S from './styles'

const CarsForm = ({ onSubmit }) => {
  function handleSubmit (e) {
    e.preventDefault()
    const {
      'brand-model': brandModel,
      color,
      image,
      plate,
      year
    } = e.target.elements

    const newCar = {
      image: image.value,
      brandModel: brandModel.value,
      year: year.value,
      plate: plate.value,
      color: color.value
    }

    onSubmit(newCar)
    e.target.reset()
    image.focus()
  }

  return (
    <S.Wrapper>
      <S.Title>Cadastrar Carro</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor='image'>Imagem (URL):</S.Label>
        <S.Input type='text' id='image' name='image'></S.Input>

        <S.Label htmlFor='brand-model'>Marca / Modelo:</S.Label>
        <S.Input type='text' id='brand-model' name='brand-model'></S.Input>

        <S.Label htmlFor='year'>Ano:</S.Label>
        <S.Input type='number' id='year' name='year'></S.Input>

        <S.Label htmlFor='plate'>Placa:</S.Label>
        <S.Input type='text' id='plate' name='plate'></S.Input>

        <S.Label htmlFor='color'>Cor:</S.Label>
        <S.Input type='text' id='color' name='color'></S.Input>

        <S.Button type='submit'>Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default CarsForm
