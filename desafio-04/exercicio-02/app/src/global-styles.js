import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff3366;
  }

	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Poppins, Arial, Helvetica, sans-serif;
    background: black;
  }

  #root {
    padding: 4rem;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default GlobalStyle
