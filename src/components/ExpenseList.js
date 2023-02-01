import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div className="p-28 flex flex-col gap-2 bg-indigo-200 my-2 mx-auto w-[50rem] max-w-[95%] rounded-xl shadow-md min-w-min">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default ExpenseList;