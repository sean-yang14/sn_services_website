export default function Cta() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl pl-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:pl-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:w-1/2">
          Ready to start?
          <br />
          Get connected today.
        </h2>
        <button href="#" type="button" className="transition group w-full flex items-center relative lg:w-1/2">
          
            <div
              className="right-0 z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo w-1/3 lg:w-1/3 px-6 py-3 rounded-md absolute"
            >
              Get Connected
            </div>
            <div className="duration-300 z-1 shadow-sm bg-[#d2c0ae] py-3 px-6 pr-4 w-1/3 lg:w-1/3 rounded-md absolute right-0 transform -translate-x-[3%] translate-y-[15%] group-hover:-translate-x-[1.5%] group-hover:translate-y-[10%]">
              <div className="text-sm sm:text-base font-medium font-sans text-logo invisible">
                Filler
              </div>
            </div>
        </button>
      </div>
    </div>
  )
}
