import styled from 'styled-components'

export const Sidebar = styled.aside`
  padding: 4rem 4rem;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 0.4rem;
  border-bottom: solid 4px var(--primary);
  margin-bottom: 4rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  font-size: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ active }) => active && 'var(--primary)'};
  font-weight: ${({ active }) => active && '600'};
`
