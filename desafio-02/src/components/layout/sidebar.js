import { H2 } from '../ui/headings'

const Sidebar = ({ articles, onLinkClick }) => {
  function handleLinkClick (id) {
    onLinkClick(id)
  }

  return (
    <aside className='sidebar'>
      <H2>Conteúdo do Bootcamp</H2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <button onClick={() => handleLinkClick(article.id)}>
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
