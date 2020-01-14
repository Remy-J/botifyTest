import React, { Component } from "react"
import "./App.css"
import NasaDataBar from "./component/nasadata/NasaDataBar"

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <NasaDataBar />
      </div>
    )
  }
}
export default App
