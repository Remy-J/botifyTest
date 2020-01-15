import React, { Component } from "react"
import axios from "axios"
import ChartBar from "../chartbar/ChartBar"
import ChartTable from "../chartTable/ChartTable"
import DropDownButton from "../dropdownbutton/DropDownButton"

class NasaData extends Component {
  state = {
    data: [],
    structuredData: [],
    displayTable: false
  }

  getData = async () => {
    //we retrieve the data from the api and store it in the STATE
    try {
      const res = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
      )
      this.setState({ data: res.data.near_earth_objects })
      console.log(this.state.data)
      //we rework the data in order to be able to display it correctly in CHARTBAR and store it in a new STATE.
      const data = []
      this.state.data.forEach(element => {
        data.push([
          element["name"],
          element["estimated_diameter"]["kilometers"]["estimated_diameter_min"],
          element["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        ])
      })
      data.sort((a, b) => {
        return b[2] - b[1] - (a[2] - a[1])
      })
      this.setState({ structuredData: data })
      console.log(this.state.structuredData)
    } catch (error) {
      console.log(error)
    }
  }

  filterClick = e => {
    const newDataStructured = []
    this.state.data.map(element => {
      if (element.orbital_data.orbit_id.includes(e.target.value))
        newDataStructured.push([
          element["name"],
          element["estimated_diameter"]["kilometers"]["estimated_diameter_min"],
          element["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        ])
    })
    this.setState({ structuredData: newDataStructured })
  }
  handleClick = () => {
    this.setState({ displayTable: !this.state.displayTable })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Change View</button>
        <DropDownButton data={this.state.data} filter={this.filterClick} />
        {this.state.displayTable ? (
          <ChartTable data={this.state.structuredData} />
        ) : (
          <ChartBar data={this.state.structuredData} />
        )}
      </div>
    )
  }
}

export default NasaData
