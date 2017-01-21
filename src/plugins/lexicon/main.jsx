import React from 'react'

import './style'

const LeftPanel = () => (
  <div className="left">
    <label className="pt-label">
      筛选条件 A
      <input className="pt-input" type="text" placeholder="Text input" dir="auto" />
    </label>
    <label className="pt-label">
      筛选条件 B
      <input className="pt-input" type="text" placeholder="Input group" dir="auto" />
    </label>
  </div>
)

const RightPanel = ({lexicon}) => (
  <div className="right">
    <div className="control-group">
      <div className="pt-button-group pt-minimal">
        <button className="pt-button">分类 1</button>
        <button className="pt-button pt-active">分类 2</button>
        <button className="pt-button">分类 3</button>
      </div>
    </div>
    <div className="item-container">
      {lexicon.map((item, index) =>
        <div className="item pt-card pt-interactive" key={index}>
          <h4>{item}</h4>
          <p>描述</p>
          <button className="pt-button">操作</button>
        </div>
      )}
    </div>
  </div>
)

const Lexicon = ({lexicon}) => (
  <div className="container">
    <LeftPanel />
    <RightPanel lexicon={lexicon} />
  </div>
)

export default Lexicon
