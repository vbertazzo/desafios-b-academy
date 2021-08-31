import { useState } from 'react'
import TitleTwo from '../ui/TitleTwo'

const Content = ({ title, content }) => {
  const [titleState] = useState(title)
  const [contentState] = useState(content)

  return (
    <article className='content'>
      <TitleTwo>{titleState}</TitleTwo>
      {contentState}
    </article>
  )
}

export default Content
