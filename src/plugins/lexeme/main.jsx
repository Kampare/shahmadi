import React from 'react'
import { NonIdealState, Button } from '@blueprintjs/core'

import './style'

const Lexeme = () => (
  <div className="blank">
    <NonIdealState visual="document" title="没有辞条" description="你可以自己写几个"
      action={
        <Button text="新建词条" />
      }/>
  </div>
)

export default Lexeme
