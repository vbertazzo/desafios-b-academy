import { useState } from 'react'
import Header from './components/layout/header/header'
import Menu from './components/layout/menu/menu'
import Sidebar from './components/layout/sidebar/sidebar'
import Content from './components/layout/content/content'
import Footer from './components/layout/footer/footer'
import Button from './components/ui/button/button'
import { H3 } from './components/ui/headings'
import Link from './components/ui/link/link'
import { ReactComponent as Logo } from './assets/logo.svg'

import GlobalStyles from './global-styles'

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
          <H3>Declarativo</H3>
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
      <Header>
        <Logo />
      </Header>
      <Menu>
        <Link to='/bootcamp' active>
          Bootcamp
        </Link>
        <Link to='/sobre'>Sobre a Brainn</Link>
      </Menu>
      <Sidebar links={links} onClick={handleLinkClick} />
      <Content title={currentLink.title} content={currentLink.content} />
      <Footer>
        <Logo />
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
