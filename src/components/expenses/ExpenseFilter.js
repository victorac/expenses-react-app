import Card from "../ui/Card";

function ExpenseFilter({ expenses, year, onSelectYear }) {
  const selectHandler = (event) => {
    onSelectYear(event.target.value);
  };

  let totalAmount = 0;
  if (expenses.length > 0) {
    totalAmount = expenses
      .map((el) => el.amount)
      .reduce((prev, curr) => Number(curr) + Number(prev));
  }
  const monthData = [
    { percentage: 0, month: "Jan" },
    { percentage: 0, month: "Feb" },
    { percentage: 0, month: "Mar" },
    { percentage: 0, month: "Apr" },
    { percentage: 0, month: "May" },
    { percentage: 0, month: "Jun" },
    { percentage: 0, month: "Jul" },
    { percentage: 0, month: "Aug" },
    { percentage: 0, month: "Sep" },
    { percentage: 0, month: "Oct" },
    { percentage: 0, month: "Nov" },
    { percentage: 0, month: "Dec" },
  ];
  expenses.forEach((element) => {
    monthData[element.date.getMonth()].percentage +=
      (Number(element.amount) / totalAmount) * 100;
  });

  return (
    <div className="flex flex-col gap-4 w-[50rem] max-w-[95%] mx-auto">
      <div className="flex flex-row p-5">
        <label className="flex flex-1">Filter by year</label>
        <select value={year} onChange={selectHandler}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <Card className="flex flex-row gap-4 text-sm bg-orange-200 px-3 py-2">
        {monthData.map((data) => (
          <MonthBar
            key={data.month}
            month={data.month}
            percentage={data.percentage}
          />
        ))}
      </Card>
    </div>
  );
}

function MonthBar({ month, percentage }) {
  const backgrounColor = {
    background: `linear-gradient(0deg, #e66465 ${percentage}%, rgb(199 210 254) ${percentage}%)`,
  };
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div className="h-[100px] w-4 rounded-md" style={backgrounColor}></div>
      <span>{month}</span>
    </div>
  );
}

export default ExpenseFilter;
