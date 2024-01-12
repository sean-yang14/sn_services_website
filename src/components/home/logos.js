export default function Logos() {
  return (
    <div className="bg-background py-20 sm:py-28 relative">
      {/* top divider */}
      <div className="absolute top-0 right-1/2 w-2/3 flex items-center border-t-2 translate-x-1/2 opacity-50 border-primary" aria-hidden="true"/>

      {/* logos */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold leading-8 text-primary">
          Connect with top dental employers of all types
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/practice-logos/aspen_logo.png"
            alt="Aspen Dental Logo"
            // width={158}
            // height={48}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/practice-logos/dasnon_park_logo.png"
            alt="Private Practice Logo"
            // width={158}
            // height={48}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/practice-logos/enlighten_dental_logo.png"
            alt="Private Practice Logo"
            // width={158}
            // height={48}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/practice-logos/interdent_logo.png"
            alt="Interdent Logo"
            // width={158}
            // height={48}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/practice-logos/heartland_logo.png"
            alt="Heartland Logo"
            // width={158}
            // height={48}
          />
        </div>
      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 right-1/2 w-2/3 flex items-center border-t-2 translate-x-1/2 opacity-50 border-primary" aria-hidden="true"/>
    </div>
  )
}
