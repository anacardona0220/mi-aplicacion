export default function indexPage(){
    return(
        <div>
        <header className="p-4 flex justify-between">
          <a href="" className="flex items-center gap-1">
            <FaAirbnb />
            
            <span className="font-bold text-xl">airbnb</span>
          </a>
          <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 ">
            <div>Anywhere</div>
            <div className="border-l border-gray-300"></div>
            <div>Any week</div>
            <div className="border-l border-gray-300"></div>
            <div> Add guests</div>
            <button className="bg-primary text-white p-2 rounded-full">
            <BsFillSearchHeartFill />
            </button>
          </div>
          <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center">
            <GiHamburgerMenu />
            <AiOutlineUser className="bg-gray-500 text-white rounded-full border border-gray-500"/>
  
          </div>
        </header>
      </div>
    )
}
