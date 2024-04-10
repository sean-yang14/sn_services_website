import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-primary flex justify-center items-center h-[70vh] sm:h-[60vh] relative">
      <div className="mx-auto max-w-2xl text-center px-6 sm:px-0">
        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Tools to build your dream career in dentistry</h2>
        {/* <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We help you land the dental job that fits your lifestyle</h2> */}
        <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-300 font-sans font-light">
          We build tools focused on solving the biggest problems for dental professionals. We want to turn the hard things into easy things.
        </p>
        {/* <Link href="/" className="transition group relative w-full mt-10 sm:mt-16 flex justify-center items-center">
          <div
          className="z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo px-10 py-3 w-1/2 sm:w-1/3 lg:w-1/2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Learn more below
          </div>
          <div className="duration-300 z-1 shadow-sm bg-[#d2c0ae]  pl-10 pr-4 py-3 w-1/2 sm:w-1/3 lg:w-1/2 rounded-md absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[30%] group-hover:-translate-x-[51%] group-hover:-translate-y-[40%]">
            <div className="text-sm sm:text-base font-medium font-sans text-logo invisible">
              Filler
            </div>
          </div>
        </Link> */}
        <div className="relative w-full mt-20 sm:mt-18 flex justify-center items-center bg-neutral-900 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo px-10 py-3 w-1/2 sm:w-1/3 lg:w-1/2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Learn more below
        </div>
      </div>
    </div>
  )
}

