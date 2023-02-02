import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/expenses/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      date: new Date(),
      amount: "249.67",
    },
    {
      title: "Water",
      date: new Date(),
      amount: "1249.67",
    },
    {
      title: "T-shirt",
      date: new Date("01-01-2023"),
      amount: "250.67",
    },
    {
      title: "Car",
      date: new Date("01-01-2022"),
      amount: "2500.67",
    },
    {
      title: "Bread",
      date: new Date("06-06-2022"),
      amount: "785.67",
    },
  ];

  const onExpenseData = (expenseData) => {
    expenses.push(expenseData);
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onExpenseData={onExpenseData} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
