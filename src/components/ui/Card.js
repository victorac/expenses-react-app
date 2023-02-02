function Card({children, className}){
    return (
        <div className={className + " flex rounded-xl shadow-md min-w-min"}>
            {children}
        </div>
    );
}

export default Card;