import Header from './components/layout/Header'
import Menu from './components/layout/Menu'
import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Button from './components/ui/Button'
import TitleOne from './components/ui/TitleOne'
import TitleThree from './components/ui/TitleThree'

const App = () => {
  const links = [
    {
      id: 1,
      title: 'Entendendo o React por debaixo dos panos.',
      content: (
        <>
          <p>
            Não adianta falar mal do React e ir pro Vue e Svelte, antes de se
            esforçar pra entender como ele funciona.
          </p>
          <Button kind='primary'>Se inscrever no curso</Button>
        </>
      )
    },
    {
      id: 2,
      title: 'Como usar useEffect de forma efetiva.',
      content: (
        <>
          <p>
            Chega de re-renders sem sentido, chegou a hora de entender o array
            de dependências do useEffect.
          </p>
          <Button kind='secondary'>Mais informações</Button>
        </>
      )
    },
    {
      id: 3,
      title: 'Vou perder meu trabalho para o GitHub Co-pilot?',
      content: (
        <>
          <p>
            O GitHub Co-pilot assumiu a cadeira de piloto e me jogou do avião.
          </p>
          <Button kind='primary'>Mudar de profissão</Button>
        </>
      )
    }
  ]

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
        <Sidebar links={links} />
        <Content title={links[0].title} content={links[0].content} />
      </Main>
      <Footer>
        <TitleThree>Brainn Co.</TitleThree>
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
