/* WIP */
import React from "react"
import { graphql } from "gatsby"

const BooksRecent = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulBook(limit: 10, sort: {fields: createdAt, order: DESC}) {
      nodes {
        id
        title
        authors {
          name
        }
        amazonHtml
        createdAt(fromNow: true)
      }
    }
  }
`

export default BooksRecent




// import React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"

// export const query = graphql`
//   {
//     allContentfulBook(limit: 10, sort: { fields: createdAt, order: DESC }) {
//       nodes {
//         id
//         title
//         authors {
//           name
//         }
//         amazonHtml
//         createdAt(fromNow: true)
//       }
//     }
//   }
// `

// // export const Book = ({ id, title, authors, amazonHtml, createdAt }) => (
// //   <div>
// //     BooksRecent
// //     <h3>{title}</h3>
// //   </div>
// // )

// const Book = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const BooksRecent = () => (
//   <StaticQuery
//     query={query}
//     render={data => <Book data={bookData} />}
//     // render={data => data.allContentfulBook.edges.map(bookData => <Book data={bookData} />)}
//   />
// )
