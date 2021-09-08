const CarsTable = ({ cars, onRemove }) => {
  const maxColSpan = 6

  return (
    <div className='cars-table-wrapper'>
      <h2>Carros</h2>
      <table border='1' className='cars-table'>
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
              <td className='cars-table-message' colSpan={maxColSpan}>
                Nenhum carro encontrado
              </td>
            </tr>
          )}

          {cars.length > 0 &&
            cars.map(car => (
              <tr key={car.plate}>
                <td>
                  <img src={car.image} alt={car.brandModel} />
                </td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>
                  <div
                    className='colorSquare'
                    style={{ backgroundColor: car.color }}
                  ></div>
                  {car.color}
                </td>
                <td>
                  <button onClick={() => onRemove(car.plate)}>Remover</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CarsTable
