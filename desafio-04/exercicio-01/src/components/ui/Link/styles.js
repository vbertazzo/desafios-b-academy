import styled from 'styled-components'

export const Link = styled.a`
  color: black;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: ${({ active }) => active && 'solid 4px var(--primary)'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`
