import ExpenseDate from "./ExpenseDate";

function ExpenseItem({date, title, amount}) {
  return (
    <div className="flex font-bold items-center bg-slate-600 my-1 mx-0 p-5 text-white justify-between rounded-xl shadow-md min-w-min">
      <ExpenseDate date={date} />
      <div className="flex flex-column flex-col-reverse gap-4 items-end justify-start flex-1 sm:flex-row sm:items-center">
        <h2 className="my-1 flex-1">{title}</h2>
        <div className="border-2 border-slate-800 rounded-lg p-2 bg-blue-100 text-black">
          ${amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
