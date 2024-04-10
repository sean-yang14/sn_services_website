import { UserGroupIcon, ArrowDownTrayIcon, FireIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '7 major DSOs.',
    description:
      'Our database covers 7 of the top DSOs and their affiliated brands. These DSOs are Aspen, Guardian, Smile Brands, Heartland, Sonrova, Pacific Dental Services and Dental Care Alliance.',
    icon: UserGroupIcon,
  },
  {
    name: 'Downloadable data.',
    description: "We provide an option to download the data as a .csv. Simply hover over the table and a download icon will pop up in the top right corner.",
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'New features (your feedback requested).',
    description: "We're looking to constantly improve our products so if there's a change you'd like to see, please let us know. If enough people are interested, we're looking to show which DSO clinics have job openings.",
    icon: FireIcon,
  },
]

export default function DsoLocator() {
  return (
    <div className="overflow-hidden bg-background text-font-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">DSO locator</p>
              <p className="mt-6 text-base sm:text-lg leading-8 font-light font-sans">
                Interested in working at a DSO but not willing to sacrifice where you live to do so? We help you locate DSO clinics based on the distance from where you want to live. Now you&apos;ll know which locations to apply to. 
              </p>
              <p className="mt-4 mb-8 text-lg leading-8 underline underline-offset-4 font-sans font-light text-base sm:text-lg">
                Price: Free
              </p>
              <a
                href='https://scrub-network-nearby-dso.streamlit.app/' 
                target='_blank'
                className="rounded-md px-4 py-2 py-1 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm bg-neutral-900 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logo"
            >
                Link to locator app
            </a>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 font-sans font-light">
                    <dt className="inline font-semibold">
                      <feature.icon className="text-logo absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/dso_locator_2.png"
              alt="dso locator screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
