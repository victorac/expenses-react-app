import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onExpenseData}) => {
  const onSubmitExpense = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Date.now() };
    onExpenseData(expenseData);
  };

  return (
    <Card className="w-[50rem] max-w-[95%] bg-red-100 p-4 items-center mx-auto my-8">
      <ExpenseForm onSubmitExpense={onSubmitExpense} />
    </Card>
  );
};

export default NewExpense;
