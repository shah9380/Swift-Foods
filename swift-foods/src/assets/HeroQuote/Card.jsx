const Card = (props)=>{
    return(
        <div className="bg-slate-800 text-center rounded-lg p-10 mb-16 max-w-[1200px] mx-auto">
            <p className="text-white text-2xl font-medium mb-2">{props.content}</p>
            <small className="text-gray-400 text-xl">{props.author}</small>
        </div>
    )
}
export default Card;