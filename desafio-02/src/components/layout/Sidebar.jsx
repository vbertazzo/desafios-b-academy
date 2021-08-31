const Sidebar = ({ links, onClick }) => {
  const handleClick = id => {
    onClick(id)
  }

  return (
    <aside className='sidebar'>
      {links.map(link => {
        return (
          <button
            onClick={() => handleClick(link.id)}
            className='link'
            key={link.id}
          >
            {link.title}
          </button>
        )
      })}
    </aside>
  )
}

export default Sidebar
