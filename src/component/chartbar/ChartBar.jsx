import React, { Component } from "react"
import Chart from "react-google-charts"

class ChartBar extends Component {
  render() {
    return (
      <Chart
        width={"1200px"}
        height={"800px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["NEO Name", "Min Estimated diameter (Km)", "Max Estimated diameter"],
          // we use destructuring to display the data
          ...this.props.data
        ]}
        options={{
          chartArea: { width: "50%" },
          hAxis: {
            title: "Min Estimated diameter (Km)",
            minValue: 0
          },
          vAxis: {
            title: "NEO Name"
          }
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    )
  }
}

export default ChartBar
