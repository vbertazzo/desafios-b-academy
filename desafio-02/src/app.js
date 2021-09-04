import { useState } from 'react'
import Header from './components/layout/header'
import Menu from './components/layout/menu'
import Sidebar from './components/layout/sidebar'
import Content from './components/layout/content'
import Footer from './components/layout/footer'
import Button from './components/ui/button'
import { H1, H3 } from './components/ui/headings'

const App = () => {
  const articles = [
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
          <div>
            <Button kind='primary'>Primary</Button>
            <Button kind='secondary'>Secondary</Button>
          </div>
        </>
      )
    }
  ]

  const [currentArticle, setCurrentArticle] = useState(articles[0])

  function onLinkClick (id) {
    const nextArticle = articles.find(article => article.id === id)

    if (!nextArticle) {
      return
    }

    setCurrentArticle(nextArticle)
  }

  return (
    <>
      <Header>
        <H1>Bootcamp B-Academy</H1>
      </Header>
      <Menu>
        <a href='/grade'>Grade do Curso</a>
      </Menu>
      <Sidebar articles={articles} onLinkClick={onLinkClick} />
      <Content article={currentArticle} />
      <Footer>
        <H3>Brainn Co.</H3>
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
