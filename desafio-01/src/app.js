import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </>
  )
}

export default App
