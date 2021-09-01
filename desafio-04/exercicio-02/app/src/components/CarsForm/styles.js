import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 5rem;
  padding: 2rem;
  background: white;
  min-width: 24rem;
  height: 34rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: center;
  width: max-content;
  border-bottom: solid 4px var(--primary);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.3rem;
`

export const Input = styled.input`
  margin-bottom: 0.3rem;
  padding: 0.3rem 0.6rem;
  width: 14rem;
`

export const Button = styled.button`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
  color: black;
  background: white;
  border-radius: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: var(--primary);
    background: black;
  }
`
