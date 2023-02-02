import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <Card className="p-28 flex-col gap-2 bg-indigo-200 my-2 mx-auto w-[50rem] max-w-[95%]">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;