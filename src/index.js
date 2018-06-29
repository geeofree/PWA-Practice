import React from 'react'
import {render} from 'react-dom'
import registerSW from 'service-worker'

const App = () => <h1>Hello World!</h1>

render(<App />, document.getElementById('app'))
registerSW()