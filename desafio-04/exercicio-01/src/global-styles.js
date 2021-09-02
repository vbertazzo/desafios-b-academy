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
    background: #161616;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 5vh 5vh 80vh 10vh;
    grid-template-areas:
    'header header'
    'menu menu'
    'sidebar content'
    'footer footer';

    max-width: 1920px;
    margin: 0 auto;
  }
`

export default GlobalStyle
