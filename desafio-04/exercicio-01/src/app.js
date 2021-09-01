import { useState } from 'react'
import Header from './components/layout/Header/Header'
import Menu from './components/layout/Menu/Menu'
import Main from './components/layout/Main/Main'
import Sidebar from './components/layout/Sidebar/Sidebar'
import Content from './components/layout/Content/Content'
import Footer from './components/layout/Footer/Footer'
import Button from './components/ui/Button/Button'
import TitleThree from './components/ui/TitleThree'
import Link from './components/ui/Link/Link'
import { ReactComponent as Logo } from './assets/logo.svg'

import GlobalStyles from './globalStyles'

const App = () => {
  const links = [
    {
      id: 1,
      title: 'Introdução ao React.js',
      content: (
        <>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            alt='React Logo'
          />
          <TitleThree>Declarativo</TitleThree>
          <p>
            React faz com que a criação de UIs interativas seja uma tarefa
            fácil. Crie views simples para cada estado na sua aplicação, e o
            React irá atualizar e renderizar de forma eficiente apenas os
            componentes necessários na medida em que os dados mudam.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'Hooks',
      content: (
        <>
          <img
            src='https://thumbs.dreamstime.com/b/evil-robot-full-growth-humanoid-futuristic-evil-robot-full-growth-humanoid-futuristic-cyborg-killer-flat-illustration-154002920.jpg'
            alt='GitHub Copilot is evil'
          />
          <p>
            Melhor aprender sobre Hooks para o GitHub Co-pilot não roubar meu
            emprego. 😰
          </p>
          <a href='https://www.google.com/search?q=vagas+de+emprego'>
            Mudar de profissão
          </a>
        </>
      )
    },
    {
      id: 3,
      title: 'Styled Components',
      content: (
        <>
          <img
            src='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png'
            alt='Styled Components Logo'
          />
          <p>
            Styled Components serve pra dar um tapa no visu. Exemplo de botões:
          </p>
          <div className='buttons'>
            <Button kind='primary'>Primary</Button>
            <Button kind='secondary'>Secondary</Button>
          </div>
        </>
      )
    }
  ]

  const [currentLink, setCurrentLink] = useState(links[0])

  const handleLinkClick = id => {
    setCurrentLink(links.find(link => link.id === id))
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Menu>
        <Link to='/bootcamp' active>
          Bootcamp
        </Link>
        <Link to='/sobre'>Sobre a Brainn</Link>
      </Menu>
      <Main>
        <Sidebar links={links} onClick={handleLinkClick} />
        <Content title={currentLink.title} content={currentLink.content} />
      </Main>
      <Footer>
        <Logo />
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
