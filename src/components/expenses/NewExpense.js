import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <Card className="w-[50rem] max-w-[95%] bg-red-100 p-4 items-center mx-auto my-8">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
