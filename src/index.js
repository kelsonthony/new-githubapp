'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]'))
