import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '',
    description:
      "Hit the 'get started' button. Tell us about the roles you're looking for and we'll work together to create a strategy and timeline for getting the right job.",
    number: 1,
  },
  {
    name: '',
    description:
      "We then begin tapping into our network and reaching out on your behalf to practices. In parallel, you'll start applying to jobs you find. Once you have a job interview, we prep you to ace it.",
    number: 2,
  },
  {
    name: '',
    description:
      "After you find a practice you'd like to work at, our team of experts will help you review and negotiate your contract.",
    number: 3,
  },
  {
    name: '',
    description:
      "All that's left is to sign the contract. Congratulations!",
    number: 4,
  },
]

export default function Process() {
  return (
    <div className="bg-background text-font-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base sm:text-lg font-semibold leading-7">Our Approach</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            What to expect when you work with us
          </p>
        </div>
        <div className="mx-auto mt-6 sm:mt-10 lg:mt-14">
          <dl className="grid grid-cols-1 lg:gap-x-4 gap-y-8 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col py-6 px-8 md:mx-6 lg:mx-0 bg-white">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                  {/* number */}
                  <div className='relative rounded-full border-2 w-10 h-10 bg-logo border-[1px] border-logo'>
                    <div className='absolute top-1/2 right-1/2 -translate-y-[65%] translate-x-1/2 text-3xl font-semibold text-white'>
                      {feature.number}
                    </div>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base font-sans font-light leading-7">
                  <p className="flex-auto">{feature.description}</p>      
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
