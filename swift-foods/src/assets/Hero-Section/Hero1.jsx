const Hero1 = ()=>{
    const divStyle = {
        backgroundImage: 'url("https://amazingarchitecture.com/storage/1868/responsive-images/wooden_living_room___media_library_original_1344_756.jpg")',
        backgroundSize: 'cover',
        position: 'relative',
      };
      
      return (
        <section style={divStyle} className="md:h-[92vh] h-[65vh] flex md:justify-start justify-center items-center bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col md:ml-24 py-8 px-4 text-center z-50 relative">
            <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-5xl dark:text-white">
              Let us find your <br /> <span className="text-rose-700">Forever Food.</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 dark:text-gray-200">
              Where Speed Meets Flavor in Every Bite. Quick Bites, Gourmet Flair.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row gap-4 sm:justify-center sm:space-y-0 sm:space5x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                search now
              </a>
              <a
                href="#"
                className="bg-white inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-rose-700 rounded-lg dark:text-rose-600 dark:hover:text-rose-800"
              >
                know more
              </a>
            </div>
          </div>
        </section>
      );
      
};
export default Hero1;