import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Resume Review',
    description:
      'Get tailored feedback on your resume.',
    icon: TrashIcon,
  },
  {
    name: 'Interview Prep',
    description:
      'Learn what employers are looking for and how to tell your story. We also help you prepare questions to ask the practice so that you can make a truly informed decision.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Auto Apply',
    description:
      "Apply to more jobs in less time. We'll handle applications and practice outreach on your behalf, letting you focus on what really matters in your life.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Culture Check',
    description:
      "The team you work with can make or break your associate experience. Make sure you know what you're getting yourself into when you decide to work somewhere.",
    icon: HeartIcon,
  },
  {
    name: 'Contract Review',
    description:
      "Understand what you're signing. Get the best terms possible and protect yourself for worst case scenarios with our team of recruiting and legal experts.",
    icon: HeartIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-background text-font-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our services
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base sm:text-lg font-semibold leading-7">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-logo">
                    <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-sm sm:text-base font-sans font-light leading-7">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


