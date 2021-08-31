import Header from './components/layout/Header'
import Menu from './components/layout/Menu'
import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Button from './components/ui/Button'
import TitleOne from './components/ui/TitleOne'
import TitleTwo from './components/ui/TitleTwo'
import TitleThree from './components/ui/TitleThree'

const App = () => {
  return (
    <>
      <Header>
        <TitleOne>Bootcamp B-Academy</TitleOne>
      </Header>
      <Menu>
        <a href='/bootcamp'>Bootcamp</a>
        <a href='/sobre'>Sobre a Brainn</a>
      </Menu>
      <Main>
        <Sidebar>
          <TitleTwo>Tópicos</TitleTwo>
          <ul>
            <li>JSX e Virtual DOM</li>
            <li>Create React App</li>
            <li>DevTools</li>
            <li>Props</li>
            <li>Prop "children"</li>
          </ul>
        </Sidebar>
        <Content>
          <TitleTwo>Pronto para aprender mais sobre React?</TitleTwo>
          <p>Se inscreva para participar do bootcamp.</p>
          <Button kind='primary'>Me inscrever</Button>
          <Button kind='secondary'>Saber mais</Button>
        </Content>
      </Main>
      <Footer>
        <TitleThree>Brainn Co.</TitleThree>
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
