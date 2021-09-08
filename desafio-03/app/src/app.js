import { useEffect, useState } from 'react'
import CarsForm from './components/cars-form'
import CarsTable from './components/cars-table'
import { get, post, del } from './utils/http'

function App () {
  const [cars, setCars] = useState([])
  const [error, setError] = useState({ active: false, message: '' })

  const url = 'http://localhost:3333/cars'

  useEffect(() => {
    async function getCars () {
      const result = await get(url)

      if (result.error) {
        setError({
          active: true,
          message:
            'Ocorreu um erro ao carregar os carros. Por favor, tente novamente em breve.'
        })
        return
      }

      setCars(result)
    }

    getCars()
  }, [])

  async function addCar (car) {
    const result = await post(url, car)

    if (result.error) {
      setError({
        active: true,
        message:
          'Ocorreu um erro ao cadastrar. Por favor, tente novamente em breve.'
      })
      return
    }

    if (error.active) {
      setError({ active: false, message: '' })
    }

    setCars(prevState => prevState.concat(car))
  }

  async function removeCar (plate) {
    const result = await del(url, { plate })

    if (result.error) {
      setError({
        active: true,
        message:
          'Ocorreu um erro ao deletar. Por favor, tente novamente em breve.'
      })
      return
    }

    if (error.active) {
      setError({ active: false, message: '' })
    }

    setCars(cars.filter(car => car.plate !== plate))
  }

  return (
    <>
      <main className='cars'>
        <CarsForm onSubmit={addCar} />
        <CarsTable cars={cars} onRemove={removeCar} />
      </main>
      {error.active && <p className='error'>{error.message}</p>}
    </>
  )
}

export default App
