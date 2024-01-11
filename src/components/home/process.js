import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '',
    description:
      "Hit the inquire button. Tell us about the role you're looking for and we'll get to know each other.",
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: '',
    description:
      "We begin our search for roles that fit your criteria. We'll reach out whenever we find a match. We'll then help you schedule and ace your interviews.",
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: '',
    description:
      "Once you find a job you like, our team of recruiting and legal experts will help you review and negotiate your contract.",
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: '',
    description:
      "Upon signing an employment contract for your ideal job, you pay a one-time fee of $1,500. If you're a D4 or resident, our services are free.",
    href: '#',
    icon: ArrowPathIcon,
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
        <div className="mx-auto mt-6 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col py-6 px-8 bg-white">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                  <feature.icon className="h-8 w-8 flex-none text-logo" aria-hidden="true" />
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
