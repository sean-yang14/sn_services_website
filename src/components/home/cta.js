import Link from "next/link";

export default function Cta() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl pl-6 py-24 sm:py-32 md:flex md:items-center md:justify-between md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:w-1/2">
          Ready to start?
          <br />
          Get connected today.
        </h2>
        
        <div className="transition group w-full relative md:w-1/2 mt-10 md:mt-0">
          <Link href='/get-started'>
            <div
              className="left-0 md:left-auto md:right-0 z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo w-1/2 py-3 rounded-md flex justify-center absolute -translate-y-1/2"
            >
              Get Connected
            </div>
            <div className="duration-300 z-1 shadow-sm bg-[#d2c0ae] py-3 pr-3 w-1/2 rounded-md absolute left-0 md:left-auto md:right-0 -translate-x-[3%] -translate-y-[35%] group-hover:-translate-x-[1.5%] group-hover:-translate-y-[40%]">
              <div className="text-sm sm:text-base font-medium font-sans text-logo invisible">
                Get Connected
              </div>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
