function Navbar() {
    
  return (
   <div>
    <nav className="flex flex-row justify-between md:justify-center items-center fixed  w-[100vw] h-[40px] before:content-[''] before:absolute before:w-[100vw] before:h-[100%] [100%] before:bg-black before:z-[-1] before:opacity-[0.7]  ">
        {/* Apple Logo  */}
        <div>
          <a href="/" className="cursor-pointer mr-4">
            <i className="bi bi-apple text-md text-slate-200 text-center hover:text-white hover:ease-in-out hover:duration-700" />
          </a>
        </div>
        {/* Menu list  */}
        <div className="mt-[1]">
            <ul className=" hidden md:flex text-sm items-center">
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Store</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Mac</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">iPad</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">iPhone</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Watch</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">AirPods</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">TV & Home</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Entertainment</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Accessories</a></li>
                <li><a href="/" className=" md:mx-2 xl:mx-5 text-xs text-slate-200 hover:text-white hover:duration-700 ">Support</a></li>
            </ul>
        </div>
        {/* Shopping Bag and Search icon  */}
        <div className="flex items-center">
            <a href="" className="mx-4 text-slate-200 hover:text-white hover:duration-700"><i className="bi bi-search" /></a>
            <a href="" className="mx-4 text-slate-200 hover:text-white hover:duration-700"><i className="bi bi-bag" /></a>
            <span className="md:hidden block mx-2 text-lg"><i class="bi bi-list text-white"></i></span>
        </div>
    </nav>
   </div>
  )
}

export default Navbar