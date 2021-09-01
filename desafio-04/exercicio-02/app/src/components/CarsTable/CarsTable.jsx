import * as S from './styles'

const CarsTable = ({ cars, onRemove }) => {
  const maxColSpan = 6

  return (
    <S.Wrapper>
      <S.Title>Carros</S.Title>

      <S.Table>
        <thead>
          <tr>
            <S.Th>Imagem</S.Th>
            <S.Th>Marca / Modelo</S.Th>
            <S.Th>Ano</S.Th>
            <S.Th>Placa</S.Th>
            <S.Th>Cor</S.Th>
            <S.Th>Ações</S.Th>
          </tr>
        </thead>

        <tbody>
          {cars.length === 0 && (
            <tr>
              <S.NotFoundMessage colSpan={maxColSpan}>
                Nenhum carro encontrado
              </S.NotFoundMessage>
            </tr>
          )}
          {cars.length > 0 &&
            cars.map(car => (
              <tr key={car.plate}>
                <S.Td>
                  <S.Image
                    className='car-image'
                    src={car.image}
                    alt={car.brandModel}
                  />
                </S.Td>
                <S.Td>{car.brandModel}</S.Td>
                <S.Td>{car.year}</S.Td>
                <S.Td>{car.plate}</S.Td>
                <S.Td>{car.color}</S.Td>
                <S.Td>
                  <S.Button onClick={() => onRemove(car.plate)}>
                    Remover
                  </S.Button>
                </S.Td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}

export default CarsTable
