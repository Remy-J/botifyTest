import React, { Component } from "react"
import axios from "axios"

class NasaData extends Component {
  state = { data: [] }

  getData = async () => {
    const res = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
    )
    this.setState({ data: res.data.near_earth_objects })
    console.log(this.state.data)
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return <div>yolo</div>
  }
}

export default NasaData
