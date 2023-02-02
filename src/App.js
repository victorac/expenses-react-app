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
