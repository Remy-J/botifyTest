import React, { Component } from "react"
import Chart from "react-google-charts"

class ChartTable extends Component {
  render() {
    return (
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={[
          ["NEO Name", "Min Estimated diameter (Km)", "Max Estimated diameter"],
          // we use destructuring to display the data
          ...this.props.data
        ]}
        options={{
          showRowNumber: true
        }}
        rootProps={{ "data-testid": "1" }}
      />
    )
  }
}

export default ChartTable
