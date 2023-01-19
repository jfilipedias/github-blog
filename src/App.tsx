import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Routes'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <GlobalStyle />
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}
