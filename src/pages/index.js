import * as React from "react"
import Header from "../components/header"
import About from "../components/about"
import Navbar from "../components/navbar"
import Layout from "../components/layout"

import "../Styles/stylesGlobal.css"

export default function App() {
  return (
    <div className="app">
      <Layout>
      <Navbar />
      <Header />
      <About />
      </Layout>
      
    </div>
  )
}