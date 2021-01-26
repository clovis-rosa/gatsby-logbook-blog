// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
// import "./src/styles/normalize.scss"
// custom CSS styles
import "./src/styles/style.scss"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"
// import "prismjs/themes/prism-coy.css"
// import "prismjs/themes/prism-dark.css"
import "prismjs/themes/prism-okaidia.css"
// import "prismjs/themes/prism-solarizedlight.css"
// import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/themes/prism-twilight.css"

/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Layout from "./src/templates/Layout"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

/*
https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
*/

/*
// https://stackoverflow.com/questions/54942047/how-to-get-previous-url-in-react-gatsby
// */
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   if (location && location.state)
//     location.state.referrer = prevLocation ? prevLocation.pathname : null
// }
