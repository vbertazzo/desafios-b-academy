import { H2 } from '../ui/headings'

const Content = ({ title, content }) => {
  return (
    <main className='content'>
      <H2>{title}</H2>
      {content}
    </main>
  )
}

export default Content
