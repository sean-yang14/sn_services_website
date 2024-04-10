import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Getting started.',
    description:
      "What we need from you is the contract you're looking to get benchmarked. You can send the contract via email to info@scrubnetwork.com.",
    icon: CloudArrowUpIcon,
    price: "Free"
  },
  {
    name: 'Contract negotiation.',
    description: "Get paid, not played. Negotiating is hard! We partner with you to provide support, coaching and a second eye to ensure that you truly leave nothing on the table.",
    icon: LockClosedIcon,
    price: "Free"
  },
  {
    name: 'Expert contract review and redlining.',
    description: "Understand the ins and outs of your contract by having a lawyer do a full review and breakdown. They'll also rewrite contract terms with the proper legal speak (aka. redlining) - an essential part of negotiating.",
    icon: LockClosedIcon,
    price: "Lawyer partner #1 charges $300. Lawyer partner #2 charges $600, which includes additional negotiation assistance. Both rates have been discounted and are best in the market."
  },
]

export default function CompDashboard() {
  return (
    <div className="bg-background text-font-color overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Compensation dashboard</p>
              <p className="mt-6 text-base sm:text-lg leading-8 font-light font-sans">
                We're in the process of launching a website where you can see real compensation data of dentists. Think glassdoor but made specifically for dentistry. This means more accurate salaries (glassdoor is known to under-represent) and a detailed breakdown of compensation contract terms so you know what to be negotiating for. With this product, dentists will now be able to get a precise answer to how much they should be getting paid, based on their specific background.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 font-light font-sans">
                While the website hasn&apos;t launched yet, we can still provide a benchmark of compensation terms based on the data that we have. We also offer contract review and negotiation services.
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Here&apos;s the thing. We can build the website, but we need your contribution to make this work. If you think that this tool is something that you could benefit from and that benefits dentistry as a whole, please contibute your compensation information. You can get the process started by emailing us at info@scrubnetwork.com.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 font-sans font-light">
                    <dt className="inline font-semibold">
                      <feature.icon className="text-logo absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                    <dd className="mt-4 underline underline-offset-4">Price: {feature.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <img
                src="/comp_dashboard_1.png"
                alt="Clinic tracker screenshot"
                className="w-[55rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[80rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1700}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
