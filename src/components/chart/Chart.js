import "./Chart.css";
import ChartBar from "./ChartBar";
import { Component } from "react";

// const Chart = (props) => {
//   const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
//   const totalMax = Math.max(...dataPointValues);
class Chart extends Component {
  render() {
    const dataPointValues = this.props.dataPoints.map(
      (dataPoint) => dataPoint.value
    );
    const totalMax = Math.max(...dataPointValues);
    return (
      <div className="chart">
        {this.props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
}

export default Chart;
