import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import qs from 'query-string'
import { Books } from "./Books"

export const BookSearch = () => {
  const keyword = qs.parse(this.props.location.keyword);
  const data = useStaticQuery(graphql`
    allContentfulBook(filter: { title: { regex: '/${keyword}/gi' } }) {
      edges {
        node {
          title
        }
      }
    }
  `)
  return <Books data={data} />
}

// import React from "react"
// import { StaticQuery, Link, graphql } from "gatsby"
// import { Books } from "./Books"

// export const BookSearch = ({ data }) => (
//   <StaticQuery query={query} render={data => <Books data={data} />} />
// )

// const query = graphql`
// query BookSearch($keywordRegEx: String) {
//   allContentfulBook(filter: {title: {regex: $keywordRegEx}}) {
//     edges {
//       node {
//         title
//       }
//     }
//   }
// }
// `
