import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: ${({ kind }) => (kind === 'primary' ? 'black' : 'var(--primary)')};
  border: ${({ kind }) =>
    kind === 'primary' ? 'none' : 'solid 1px var(--primary)'};
  background: ${({ kind }) =>
    kind === 'primary' ? 'var(--primary)' : 'white'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
