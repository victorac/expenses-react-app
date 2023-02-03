import { useState } from "react";

import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const filteredExpenses = expenses.filter(
    (expense) =>
      String(expense.date.getFullYear()) === selectedYear ||
      selectedYear === "All"
  );

  const onSelectYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="p-5 flex-col gap-2 bg-indigo-200 my-2 mx-auto w-[50rem] max-w-[95%]">
      <ExpenseFilter
        expenses={filteredExpenses}
        onSelectYear={onSelectYear}
        year={selectedYear}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
