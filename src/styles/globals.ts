import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.color['gray-800']};
  color: ${(props) => props.theme.color['gray-200']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif
}
`
