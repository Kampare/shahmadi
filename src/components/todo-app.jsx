import React from 'react'

import Navbar from './navbar'
import Footer from './footer'
import CounterContainer from '../containers/counter-container'
import WindowManagerContainer from '../containers/window-manager-container'

export default () => (
  <div>
    <Navbar />
    <WindowManagerContainer />
    <Footer />
  </div>
)
