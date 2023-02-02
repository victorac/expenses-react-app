function ExpenseFilter({ expenses, onSelectYear }) {
  
  let totalAmount = 0;
  if (expenses.length > 0){
    totalAmount = expenses.reduce((prev, curr) => Number(curr.amount) + Number(prev.amount));
  }
  
  return (
    <div className="flex flex-col gap-4 w-[50rem] max-w-[95%] mx-auto p-5">
      <div className="flex flex-row p-5">
        <label className="flex flex-1">Filter by year</label>
        <select onChange={onSelectYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
            <div className="h-[100px] w-4 bg-white items-end justify-end">
                <div className="h-[0px] w-4 bg-black"></div>
            </div>
            <span>Jan</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseFilter;
