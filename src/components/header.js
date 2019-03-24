import React from "react"
import { Link } from "gatsby"

export default () => (
    <div className="Nav_Home">
      <div className="Nav_Logo">
      </div>
      <ul className="Nav_Menu">
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </div>
  )