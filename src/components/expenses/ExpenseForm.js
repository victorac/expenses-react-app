import { useState } from "react";

const ExpenseForm = ({ onSubmitExpense, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSubmitExpense(expenseData);
  };

  const cancelHandler = (event) => {
    onCancel();
  };

  const submitDisabled =
    enteredTitle.length === 0 ||
    enteredAmount.length === 0 ||
    enteredDate.length === 0;

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-5 flex-wrap mb-1 text-left"
    >
      <div className="flex flex-col gap-1">
        <label className="font-bold">Title</label>
        <input
          value={enteredTitle}
          onChange={titleChangeHandler}
          className="w-80 px-1"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Amount</label>
        <input
          value={enteredAmount}
          onChange={amountChangeHandler}
          className="w-80 px-1"
          type="number"
          min={0.01}
          step={0.01}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 ">
        <label className="font-bold">Date</label>
        <input
          value={enteredDate}
          onChange={dateChangeHandler}
          className="w-80 max-w-full px-1"
          type="date"
          min="2019-01-01"
          max="2023-12-31"
        />
      </div>
      <button
        onClick={cancelHandler}
        type="button"
        className="border-2 border-black px-4 rounded-lg bg-sky-100 hover:bg-sky-200 disabled:bg-slate-500"
      >
        Cancel
      </button>
      <button
        disabled={submitDisabled}
        type="submit"
        className="border-2 border-black px-4 rounded-lg bg-sky-100 hover:bg-sky-200 mr-2 disabled:bg-slate-500"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
