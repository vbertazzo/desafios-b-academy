import Header from './components/layout/header'
import Menu from './components/layout/menu'
import Sidebar from './components/layout/sidebar'
import Content from './components/layout/content'
import Footer from './components/layout/footer'
import Button from './components/ui/button'
import { H1, H2, H3 } from './components/ui/headings'

const App = () => {
  return (
    <>
      <Header>
        <H1>B. Academy Bootcamp</H1>
      </Header>
      <Menu>
        <a href='/grade'>Grade do Curso</a>
      </Menu>
      <Sidebar>
        <H2>Conteúdo do Bootcamp</H2>
        <ul>
          <li>Introdução ao React.js</li>
          <li>JSX</li>
          <li>Styled Components</li>
        </ul>
      </Sidebar>
      <Content>
        <H2>Pronto para aprender mais sobre React?</H2>
        <p>Se inscreva para participar do bootcamp.</p>
        <Button kind='primary'>Me inscrever</Button>
        <Button kind='secondary'>Saber mais</Button>
      </Content>
      <Footer>
        <H3>Brainn Co.</H3>
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
