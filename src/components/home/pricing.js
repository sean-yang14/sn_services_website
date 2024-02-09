import { CheckCircleIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'For All Associates',
    id: 'tier-free',
    href: '#',
    price: { total: 'Free', annually: 'Free' },
    description: "A premium career support service tailored for you. We want to completely upend HR in dentistry and it starts with providing exceptional value to dentists. That's why we're free.",
    features: ['Access to all our services', 'Tracker of practices by location', 'Comp comparison', 'Heavily discounted contract review by experts'],
  },
  // {
  //   name: 'For Experienced Professionals',
  //   id: 'tier-experienced',
  //   href: '#',
  //   price: { total: '$1,500', annually: '$1,500' },
  //   description: 'A premium job search service, tailored for your specific needs and wants.',
  //   features: ['Access to all our services', 'Unlimited contract reviews by our recruiting experts', '3x contract reviews and redlines by our legal experts'],
  // },  
  {
    name: 'Contract Review',
    id: 'tier-contract',
    href: '#',
    price: { total: '$300 - $600', annually: '$500' },
    description: 'Ensure you are getting the very best contract possible and ultimately protecting yourself.',
    features: [
      'Varying levels of contract review but all are heavily discounted rates with our partner experts',
      'Complete breakdown of contract terms to ensure you understand what you are signing',
      'Comparison against contract terms of your peers',
      'Negotiation guidance',
      'Redlining (i.e., rewriting the contract during the negotiation process to ensure you are getting what you want)',
    ],
  },
]

export default function Example() {
  return (
    <div className="bg-background text-font-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base sm:text-lg font-semibold leading-7">Pricing</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Your one-stop shop to land the job and pay you deserve
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base font-sans font-light leading-8 sm:text-center">
          We&apos;re able to put you first because we aren&apos;t serving two masters.
        </p> */}
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-divider sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-2 lg:divide-x-2 lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base sm:text-lg font-semibold leading-7">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price.total}</span>
                </p>
                {/* <p className="mt-3 text-sm leading-6 text-gray-500">{tier.price.annually} per month if paid annually</p> */}
                {/* <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy plan
                </a> */}
                <p className="mt-6 text-sm sm:text-base font-normal font-sans leading-6">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base font-sans font-light leading-6 text-light-font">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-logo" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
