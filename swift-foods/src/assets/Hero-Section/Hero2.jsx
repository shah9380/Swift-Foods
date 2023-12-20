import Button from "../button";
const Hero2 = ()=>{
    return(
        <section className="md:flex md:flex-row justify-between items-center flex flex-col my-24 mx-8 relative">
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className="md:w-[50vw] md:h-[70vh] md:absolute md:z-50" />
            <div className="w-[100%] flex flex-col p-12 gap-4 flex-start justify-center bg-gray-200 mx-8 md:w-[70vw] md:h-[80vh] md:ml-[45vw] md:z-0 md:pl-[10vw]">
                <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis. </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <Button value='Get in Touch'></Button>
            </div>
        </section>
    )
}
export default Hero2;
