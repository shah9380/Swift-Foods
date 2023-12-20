const Button = (props)=>{
    return(
        <a href="#" className="text-white text-center bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-primary-800 w-[8rem]">{props.value}</a>
    )
}
export default Button;