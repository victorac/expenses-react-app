const Chart = (props) => {
  return (
    <div className="h-40 justify-around flex text-center p-4 rounded-xl bg-[#f8dfff]">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          value={dataPoint.value}
          total={props.total}
        />
      ))}
    </div>
  );
};

const ChartBar = (props) => {
  let calculatedHeight = "0%";
  if (props.value > 0) {
    calculatedHeight = (props.value / props.total) * 100 + "%";
  }
  return (
    <div className="h-full w-4 flex flex-col items-center">
      <div className="h-full w-full bg-[rgb(199,210,254)] rounded-md flex flex-col justify-end overflow-hidden">
        <div
          className="w-full bg-[#e66465] transition-all ease-out delay-300"
          style={{ height: calculatedHeight }}
        ></div>
      </div>
      <div className="text-center text-xs">{props.label}</div>
    </div>
  );
};

export default Chart;
