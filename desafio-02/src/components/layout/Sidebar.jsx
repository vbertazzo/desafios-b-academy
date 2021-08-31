const Sidebar = ({ links }) => {
  return (
    <aside className='sidebar'>
      {links.map(link => {
        return (
          <a href={`/${link.id}`} key={link.id}>
            {link.title}
          </a>
        )
      })}
    </aside>
  )
}

export default Sidebar
