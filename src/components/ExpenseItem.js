function ExpenseItem() {
  return (
    <div className="flex font-bold items-center bg-slate-600 my-1 mx-0 p-5 text-white justify-between rounded-xl shadow-md min-w-min">
      <div className="text-slate-200 mx-5">March 28th 2021</div>
      <div className="flex flex-column flex-col-reverse gap-4 items-end justify-start flex-1 sm:flex-row sm:items-center">
        <h2 className="my-1 flex-1">Car insurance</h2>
        <div className="border-2 border-slate-800 rounded-lg p-2 float-right bg-blue-100 text-black">
          $249.67
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
