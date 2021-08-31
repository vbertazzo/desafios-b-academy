const CarsTable = ({ cars, onRemove }) => {
  const maxColSpan = 6

  return (
    <table border='1'>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca / Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {cars.length === 0 && (
          <tr>
            <td colSpan={maxColSpan}>Nenhum carro encontrado</td>
          </tr>
        )}
        {cars.length > 0 &&
          cars.map(car => (
            <tr key={car.plate}>
              <td>
                <img
                  className='car-image'
                  src={car.image}
                  alt={car.brandModel}
                />
              </td>
              <td>{car.brandModel}</td>
              <td>{car.year}</td>
              <td>{car.plate}</td>
              <td>{car.color}</td>
              <td>
                <button onClick={() => onRemove(car.plate)}>Remover</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default CarsTable
