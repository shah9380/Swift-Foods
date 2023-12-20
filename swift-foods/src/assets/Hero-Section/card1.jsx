const Card = (props)=>{
    return(
        <div className="flex flex-col justify-center items-start md:w-1/2 lg:w-1/3 gap-4 p-4">
            <div className="bg-gray-200 p-6 rounded-lg drop-shadow-lg">{props.content}</div>
            <div className="flex gap-2 justify-center items-start">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="profile pic" className="rounded-full h-[50px] w-[50px]" />
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;