import React from 'react'

const Menubar = () => (
  <div>
    <h2>辞书界面</h2>
    <ul>
    {lexicon.map((item, index) =>
      <li key={index}>{item}</li>
    )}
    </ul>
  </div>
)

export default Menubar
