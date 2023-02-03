import { useState } from "react";

const ExpenseForm = ({ onSubmitExpense, onFinish }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  // });
  // console.log(userInput);

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         title: event.target.value,
    //     };
    // });
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         amount: event.target.value,
    //     };
    // });
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         date: event.target.value,
    //     };
    // });
  };

  // const resetData = () => {
  //     setEnteredTitle("");
  //     setEnteredAmount("");
  //     setEnteredDate("");
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    onSubmitExpense(expenseData);
    // resetData();
    onFinish();
  };

  const cancelHandler = (event) => {
    onFinish();
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
        type="submit"
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
