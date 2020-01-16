import React, { Component } from "react"

class DropDownButton extends Component {
  state = {
    data: [],
    displayList: false
  }
  // Display the dropdown
  handleClick = () => {
    this.setState({ displayList: !this.state.displayList })
  }

  componentDidUpdate(prevProps) {
    // compare this.props and prevProps
    if (this.props !== prevProps) {
      const propsData = new Set(
        this.props.data.map(data => data.orbital_data.orbit_id)
      )
      const newData = []
      propsData.forEach(elem => {
        newData.push(elem)
      })
      newData.push("all")
      this.setState({
        data: newData
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Filter selection</button>
        {this.state.displayList
          ? this.state.data.map((data, index) => (
              <option key={index} value={data} onClick={this.props.filter}>
                {data}
              </option>
            ))
          : null}
      </div>
    )
  }
}

export default DropDownButton
