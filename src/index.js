import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {injectGlobal, ThemeProvider} from 'styled-components'

import mainTheme from 'themes/main.theme'
import registerSW from 'service-worker/registerSW'
import {NavHeader} from 'components'

injectGlobal`
  html {
    font-size: 1.1em;
  }

  * {
    margin: 0;
    padding: 0;
    color: ${mainTheme.dark};
    box-sizing: border-box;
    font-family: helvetica;
  }
`

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Fragment>
      <NavHeader />
      <h1>Hello World!</h1>
    </Fragment>
  </ThemeProvider>
)

render(<App />, document.getElementById('app'))
registerSW()
