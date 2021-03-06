import React from "react"
import { Link } from "gatsby"

export default () => (
    <div className="Nav">
      <div className="Nav_Logo">
        <Link to="/">
          <p><span role="img" aria-label="Sanduche"> 🥪</span></p>
        </Link>
      </div>
      <ul className="Nav_Menu">
        <li className="Active">
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </div>
  )