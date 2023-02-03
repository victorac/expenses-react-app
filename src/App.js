import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";
import Chart from "./components/ui/Chart";

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: "Car Insurance",
    date: new Date(),
    amount: "249.67",
  },
  {
    id: 1,
    title: "Water",
    date: new Date(),
    amount: "1249.67",
  },
  {
    id: 2,
    title: "T-shirt",
    date: new Date("01-01-2023"),
    amount: "250.67",
  },
  {
    id: 3,
    title: "Car",
    date: new Date("01-01-2022"),
    amount: "2500.67",
  },
  {
    id: 4,
    title: "Bread",
    date: new Date("06-06-2022"),
    amount: "785.67",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onExpenseData = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseData={onExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
