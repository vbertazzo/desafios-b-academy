import { useState } from 'react'

import * as S from './styles'

const Sidebar = ({ links, onClick }) => {
  const [active, setActive] = useState(1)

  const handleClick = id => {
    setActive(id)
    onClick(id)
  }

  return (
    <S.Sidebar>
      <S.Title>Conteúdo do Bootcamp</S.Title>
      <S.List>
        {links.map(link => {
          return (
            <S.ListItem key={link.id}>
              <S.Button
                onClick={() => handleClick(link.id)}
                active={link.id === active}
              >
                {link.title}
              </S.Button>
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Sidebar>
  )
}

export default Sidebar
