import Header from './components/layout/header'
import Menu from './components/layout/menu'
import Main from './components/layout/main'
import Sidebar from './components/layout/sidebar'
import Content from './components/layout/content'
import Footer from './components/layout/footer'
import Button from './components/ui/button'
import { H1, H2, H3 } from './components/ui/headings'

const App = () => {
  return (
    <>
      <Header>
        <H1>Bootcamp B-Academy</H1>
      </Header>
      <Menu>
        <a href='/bootcamp'>Bootcamp</a>
        <a href='/sobre'>Sobre a Brainn</a>
      </Menu>
      <Main>
        <Sidebar>
          <H2>Tópicos</H2>
          <ul>
            <li>JSX e Virtual DOM</li>
            <li>Create React App</li>
            <li>DevTools</li>
            <li>Props</li>
            <li>Prop "children"</li>
          </ul>
        </Sidebar>
        <Content>
          <H2>Pronto para aprender mais sobre React?</H2>
          <p>Se inscreva para participar do bootcamp.</p>
          <Button kind='primary'>Me inscrever</Button>
          <Button kind='secondary'>Saber mais</Button>
        </Content>
      </Main>
      <Footer>
        <H3>Brainn Co.</H3>
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
