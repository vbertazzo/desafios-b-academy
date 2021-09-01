import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
  background: white;
  min-width: 24rem;
  max-width: 42rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: center;
  width: max-content;
  border-bottom: solid 4px var(--primary);
`

export const Table = styled.table`
  border-top: solid 1px black;
  border-spacing: 0;
`

export const Th = styled.th`
  padding: 0.3rem 0.5rem;
  border-right: solid 1px black;
  border-bottom: solid 1px black;

  &:first-child {
    border-left: solid 1px black;
  }
`

export const NotFoundMessage = styled.td`
  font-size: 1.1rem;
  text-align: center;
  padding: 2rem 0;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  border-right: solid 1px black;
`

export const Td = styled.td`
  padding: 0.3rem 0.6rem;
  text-align: center;
  border-right: solid 1px black;
  border-bottom: solid 1px black;

  &:first-child {
    border-left: solid 1px black;
  }
`

export const Image = styled.img`
  width: 10rem;
  border-radius: 1rem;
`

export const Button = styled.button`
  font-size: 1rem;
  background: transparent;
  border: none;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`
