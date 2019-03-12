import React from "react"
import { Link } from "gatsby"

export default () => (
    <div className="Nav">
    <div className="Nav_title">
    <Link to="/">
      <p><span role="img" aria-label="Sanduche"> 🥪</span></p>
    </Link>
    </div>
    <div className="Nav_list">
     <Link to="/work">Work</Link>
     <Link to="/">About</Link>
    </div>
    </div>
  )