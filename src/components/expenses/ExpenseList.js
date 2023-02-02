import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <Card className="p-5 flex-col gap-2 bg-indigo-200 my-2 mx-auto w-[50rem] max-w-[95%]">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={`expense-${index}`}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
