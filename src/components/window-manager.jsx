import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core'

import Lexeme from '../plugins/lexeme/main'
import Lexicon from '../plugins/lexicon/main'

const components = {
  lexeme: Lexeme,
  lexicon: Lexicon
}

const WindowManager = ({tabs, onCloseClick}) => (
  <Tabs>
    <TabList className="tabbar">
      {tabs.map(tab =>
        <Tab key={tab.id}>
          <span>{tab.title}</span>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            onCloseClick(tab.id)
          }}>&times;</a>
        </Tab>
      )}
    </TabList>
    {tabs.map(tab => {
      const Component = components[tab.type]
      return (
        <TabPanel className="main-container" key={tab.id}>
          <Component {...tab.data}/>
        </TabPanel>
      )
    })}
  </Tabs>
)

export default WindowManager
