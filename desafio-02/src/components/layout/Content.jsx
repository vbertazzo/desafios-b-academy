import TitleTwo from '../ui/TitleTwo'

const Content = ({ title, content }) => {
  return (
    <article className='content'>
      <TitleTwo>{title}</TitleTwo>
      {content}
    </article>
  )
}

export default Content
