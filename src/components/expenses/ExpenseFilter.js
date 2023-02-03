import Card from "../ui/Card";

function ExpenseFilter({ year, onSelectYear }) {
  const selectHandler = (event) => {
    onSelectYear(event.target.value);
  };
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
    </div>
  );
}


export default ExpenseFilter;
