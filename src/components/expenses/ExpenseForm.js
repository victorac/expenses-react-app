const ExpenseForm = () => {
    return <form className="flex gap-10 flex-wrap mb-1 text-left">
        <div className="flex flex-col gap-1">
            <label className="font-bold">Title</label>
            <input className="w-80 px-1" type="text"  />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-bold">Amount</label>
            <input className="w-80 px-1" type="number" min={0.01} step={0.1}/>
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-bold">Date</label>
            <input className="w-80 max-w-full px-1" type="date" min="2019-01-01" max="2023-12-31" />
        </div>
        <button className= "border-2 border-black px-4 rounded-lg bg-sky-100 hover:bg-sky-200">Add Expense</button>
    </form>
}

export default ExpenseForm;