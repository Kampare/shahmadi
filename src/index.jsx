import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { FocusStyleManager } from "@blueprintjs/core";

import TodoApp from './components/todo-app'
import app from './reducers'

import './style'

FocusStyleManager.onlyShowFocusOnTabs()

let store = createStore(app)

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
