import React from 'react'

const Counter = ({page, onButtonClick}) => (
  <div>
    <span>page: {page}</span>
    <button onClick={() => onButtonClick()}>next</button>
  </div>
)

export default Counter
