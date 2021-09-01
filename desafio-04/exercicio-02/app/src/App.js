import { useEffect, useState } from 'react'
import CarsForm from './components/CarsForm/CarsForm'
import CarsTable from './components/CarsTable/CarsTable'
import Header from './components/Header/Header'
import Lines from './components/Lines/Lines'
import CarsContainer from './components/CarsContainer/CarsContainer'
import Main from './components/Main/Main'
import Message from './components/Message/Message'
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
      <Main>
        <Header />
        {error.active && <Message>{error.message}</Message>}
        <Lines />
        <CarsContainer>
          <CarsForm onSubmit={addCar} />
          <CarsTable cars={cars} onRemove={removeCar} />
        </CarsContainer>
      </Main>
    </>
  )
}

export default App
