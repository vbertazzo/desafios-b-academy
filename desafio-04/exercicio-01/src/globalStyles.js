import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff3366;
    --secondary: #f3f3f3;
  }

	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Poppins, Arial, Helvetica, sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
