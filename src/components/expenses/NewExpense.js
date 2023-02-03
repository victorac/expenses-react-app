import { useState } from "react";
import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onExpenseData}) => {
    const [showForm, setShowForm] = useState(false);

  const onSubmitExpense = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Date.now() };
    onExpenseData(expenseData);
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  }

  const onFinish = () => {
    setShowForm(false);
  }

  return (
    <Card className="w-[50rem] max-w-[95%] bg-red-100 p-4 items-center mx-auto my-8">
      {showForm && <ExpenseForm onSubmitExpense={onSubmitExpense} onFinish={onFinish} />}
      {!showForm && <button onClick={addNewExpenseHandler} className="border border-black px-4 py-2 mx-auto bg-sky-100 hover:bg-sky-200 rounded-md">Add new expense</button>}
    </Card>
  );
};

export default NewExpense;
