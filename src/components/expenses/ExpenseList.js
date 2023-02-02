import { useState } from "react";

import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  
  const onSelectYear = (event) => {
    const selectedYear = event.target.value;
    const filtered = expenses.filter(expense => String(expense.date.getFullYear()) === selectedYear);
    setFilteredExpenses(filtered);
  };

  return (
    <div>
      <ExpenseFilter expenses={filteredExpenses} onSelectYear={onSelectYear} />
      <Card className="p-5 flex-col gap-2 bg-indigo-200 my-2 mx-auto w-[50rem] max-w-[95%]">
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={`expense-${index}`}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;
