import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataValue = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
