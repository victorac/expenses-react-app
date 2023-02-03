import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="text-center">No expenses found.</p>;
  }
  return (
    <ul className="list-none p-0">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
