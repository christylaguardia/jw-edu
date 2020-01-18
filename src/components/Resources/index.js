import React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { Books } from "../components/Books"
// import SideMenu from "./SideMenu"
import Table from "./Table"

const Resources = ({ data }) => (
  <div className="container">
    {/* <div className="columns is-centered">
      <div className="column is-one-quarter">
        <SideMenu title="Find Books" />
      </div>
      <div className="column"> */}
        <div className="content">
          {data && <Table data={data} />}
        </div>
      {/* </div>
    </div> */}
  </div>
)

export default Resources
