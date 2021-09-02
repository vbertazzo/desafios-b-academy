import styled from 'styled-components'

export const Wrapper = styled.nav`
  grid-area: menu;
  height: 5rem;
  background: var(--secondary);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 5rem;

  display: flex;
  justify-content: flex-end;
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;

  a:first-child {
    margin-right: 3rem;
  }
`
