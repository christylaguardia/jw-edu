// const React = require("react")
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

// const Layout = require("./src/components/layout")

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "my-body-class",
  })
}

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }
