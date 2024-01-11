export default function Hero() {
  return (
    <div className="bg-primary flex justify-center pt-5 md:pt-10 h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Land the dental job that fits your lifestyle</h2>
        {/* <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We help you land the dental job that fits your lifestyle</h2> */}
        <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-300 font-sans font-light">
          Scrub Network partners with dental professionals in their job search, offerring personalized support from start to finish. Your success is our exclusive focus.
        </p>
        <button href="#" type="button" className="transition group relative w-full mt-16 flex justify-center items-center">
          <div
          className="z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo px-10 py-3 w-1/4 md:w-1/3 lg:w-1/2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Get Connected
          </div>
          <div className="duration-300 z-1 shadow-sm bg-[#d2c0ae]  pl-10 pr-4 py-3 w-1/4 md:w-1/3 lg:w-1/2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-[30%] group-hover:-translate-x-[51.25%] group-hover:-translate-y-[35%]">
            <div className="text-sm sm:text-base font-medium font-sans text-logo invisible">
              Filler
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

