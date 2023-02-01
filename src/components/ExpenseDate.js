function ExpenseDate({date}){
    const year = date.toLocaleString([], {year: "numeric"});
    const month = date.toLocaleString([], {month: "long"});
    const day = date.toLocaleString([], {day: "numeric"});

    return (
        <div className="flex w-20 h-20 flex-col bg-opacity-40 bg-black text-slate-100 mx-5 items-center justify-center p-1 border rounded-md">
            <div className="text-xs">{month}</div>
            <div className="text-xs" >{year}</div>
            <div className="text-3xl font-bold">{day}</div>
        </div>
    );

}

export default ExpenseDate;