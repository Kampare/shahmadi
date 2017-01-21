import React from 'react'

const Navbar = () => (
  <nav className="pt-navbar pt-fixed-top">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">Shahmadi</div>
      <input className="pt-input" placeholder="搜索..." type="text" />
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button className="pt-button pt-minimal pt-icon-book">辞书</button>
      <button className="pt-button pt-minimal pt-icon-document">辞条</button>
      <span className="pt-navbar-divider"></span>
      <button className="pt-button pt-minimal pt-icon-user"></button>
      <button className="pt-button pt-minimal pt-icon-notifications"></button>
      <button className="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
)

export default Navbar
