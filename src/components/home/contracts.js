import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Compensation benchmarking.',
      description: 'Compare your compensation terms (daily rate, guaranteed or not, % of production or collection, fees, etc) against actual contract terms your peers have received.',
      icon: CloudArrowUpIcon,
      price: 'Free',
    },
    {
      name: 'Contracts primer.',
      description: 'Gain a better understanding of how contracts work and common things to watch out for. This primer is a general overview, not specific to your contract.',
      icon: LockClosedIcon,
      price: 'Free',
    },
    {
        name: 'Contract negotiation.',
        description: 'Get paid, not played. Negotiating is hard! We partner with you to provide support, coaching, and a second eye to ensure that you truly leave nothing on the table',
        icon: FingerPrintIcon,
        price: 'Free'
    },
    {
      name: 'Expert contract review and redlining.',
      description: "Understand the ins and outs of your contract by having a laywer do a full review and breakdown. They'll also rewrite contract terms to match your wants (redlining) - an essential part of negotiating.",
      icon: ArrowPathIcon,
      price: "Lawyer partner #1 charges $300. Lawyer partner #2 charges $600, which includes additional negotiation assistance.",
    },
  
  ]
  
  export default function Contracts() {
    return (
      <div className="bg-background text-font-color py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base font-semibold leading-7">Hard Thing #1</h2>
            <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Knowing what you should be getting paid</p>
            <p className="mt-6 text-base sm:text-lg leading-8 font-sans font-light">
              We all want to be paid fairly for the work that we do. The problem is that dentists don&apos;t really know what they should be getting paid. Scrub Network wants to provide complete pay transparency in dentistry. That means you understand what contract terms you should be negotiating for and how much money you should be taking home at the end of the day. 
            </p>
            {/* <p className="mt-6 text-lg leading-8">
            Make sure you&apos;re protected from the mayhem that too many associates experience.
            </p> */}
          </div>
        </div>
        {/* <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div> */}
        {/* <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
                <dd className="mt-4">Price: {feature.price}</dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    )
  }
  