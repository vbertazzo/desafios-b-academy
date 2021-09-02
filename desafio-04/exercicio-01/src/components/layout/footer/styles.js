import styled from 'styled-components'

export const Wrapper = styled.footer`
  grid-area: footer;
  background: black;
  padding: 1.5rem 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 1rem;
    color: var(--primary);
    font-size: 1rem;
  }

  a:hover {
    color: white;
  }
`
