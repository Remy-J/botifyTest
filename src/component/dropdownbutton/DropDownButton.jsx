import React, { Component } from "react"
import { Dropdown } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
class DropDownButton extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropDownButton
