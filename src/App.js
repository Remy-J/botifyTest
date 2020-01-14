import React, { Component } from "react"
import "./App.css"
import NasaData from "./components/chartbar/NasaData"

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <NasaData />
      </div>
    )
  }
}
export default App
