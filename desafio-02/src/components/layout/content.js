import { H2 } from '../ui/headings'

const Content = ({ article }) => {
  return (
    <main className='content'>
      <H2>{article.title}</H2>
      {article.content}
    </main>
  )
}

export default Content
