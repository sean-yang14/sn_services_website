import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Getting started.',
    description:
      "What we need from you is a list of locations you're interested in. It has to at least be at the [city, state] level to get the best results. County names are too broad. You can send the list via email to info@scrubnetwork.com.",
    icon: CloudArrowUpIcon,
    price: "$30 per 25 towns. This is solely to cover data pulling costs. 25 towns will return hundreds of clinics."
  },
  {
    name: 'Auto reaching out.',
    description: "If you need help reaching out, we're here for you. There's a column in the tracker to note if you're interested in a particular clinic. Simply mark 'yes' and let us know to take a look. We'll then reach out to those clinics on your behalf, letting you know of next steps once we hear a response.",
    icon: LockClosedIcon,
    price: "$50 to reach out to the first 150 clinics. 40 cents per clinic thereafter."
  },
]

export default function ClinicTracker() {
  return (
    <div className="overflow-hidden bg-background text-font-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Clinic outreach tracker</p>
              <p className="mt-6 text-base sm:text-lg leading-8 font-light font-sans">
                You tell us where you want to work, and we provide a tracker of clinics in those areas based on if you&apos;re a general dentist or specialist. The tracker provides detailed information on each clinic, making it easy to do research. You can then reach out to the clinics you&apos;re interested in or have Scrub Network reach out on your behalf.
                This method is a modern take on applying door-to-door. It&apos;s a little brute force, but it works.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 font-light font-sans">
                    <dt className="inline font-semibold">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-logo" aria-hidden="true" />
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
                src="/clinic_tracker.png"
                alt="Clinic tracker screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
            />
            <img
                src="/clinic_tracker_2.png"
                alt="Clinic tracker screenshot"
                className="mt-6 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
