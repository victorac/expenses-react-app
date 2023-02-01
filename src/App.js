import ExpenseList from "./components/ExpenseList";

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
    }
  ]

  return <ExpenseList expenses={expenses} />;
}

export default App;