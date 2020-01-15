import React, { Component } from "react"

class DropDownButton extends Component {
  state = {
    data: [],
    displayList: false
  }

  handleClick = () => {
    this.setState({ displayList: !this.state.displayList })
  }

  componentDidUpdate(prevProps) {
    // compare this.props and prevProps
    if (this.props !== prevProps) {
      const result = new Set(
        this.props.data.map(data => data.orbital_data.orbit_id)
      )
      const newData = []
      result.forEach(elem => {
        newData.push(elem)
      })
      this.setState({
        data: newData
      })
      console.log(this.state.data)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>drop down menu</button>
        {this.state.displayList
          ? this.state.data.map((data, index) => (
              <p key={index} value={data} onClick={this.props.filter}>
                {data}
              </p>
            ))
          : null}
      </div>
    )
  }
}

export default DropDownButton
