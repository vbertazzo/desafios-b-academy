import styled from 'styled-components'

export const Wrapper = styled.article`
  grid-area: content;
  padding: 4rem 4rem;
  flex-grow: 1;
  background: white;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  align-items: center;
  max-width: 50rem;

  display: flex;
  flex-direction: column;

  img {
    max-width: 30rem;
  }

  p {
    margin: 2rem 0;
  }

  a {
    color: var(--primary);
    font-weight: 600;
    font-size: 1.1rem;
  }

  a:hover {
    color: black;
  }

  .buttons {
    display: flex;

    button:first-child {
      margin-right: 1rem;
    }
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`
