export default function finding_job() {
  return (
    <div className="bg-background text-font-color py-24 sm:py-32 flex justify-center text-center relative">
      {/* top divider */}
      <div className="absolute top-0 right-1/2 w-2/3 flex items-center border-t-2 translate-x-1/2 opacity-50 border-primary" aria-hidden="true"/>

      {/* Statement on hard things */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7">Hard Thing #2</h2>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Finding a job where you want to live</h3>
          <p className="mt-6 text-base sm:text-lg leading-8 font-sans font-light">
            It seems like the most common job advice for associates having trouble finding a job is to go rural. There&apos;s a lot of truth to that, but for many people life is more than just their job. We understand that where you want to live matters, which is why we created 2 tools to help you do that.
          </p>
        </div>
      </div>
    </div>
  )
}
