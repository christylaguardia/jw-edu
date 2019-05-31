import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p>
      <span><Link to="/">Home</Link></span>
      <span> | </span>
      <span><Link to="/about/">About</Link></span>
      <span> | </span>
      <span><Link to="/authors/">Authors</Link></span>
      <span> | </span>
      <span><Link to="/books/">Books</Link></span>
      <span> | </span>
      <span><Link to="/websites/">Websites</Link></span>
    </p>
  </div>
)