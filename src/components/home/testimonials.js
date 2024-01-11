export default function Testimonials() {
  return (
    // <section className="bg-gray-900 py-24 sm:py-32">
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" /> */}
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-base sm:text-lg leading-8 text-white font-sans font-light">
                <p>
                  “I spent months worrying about finding a job. Then I found Scrub Network. They provided much needed guidance in my job search and took a lot of the busy work off my plate allowing me to focus on completing residency.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-sm sm:text-base">
                  <div className="font-semibold text-white">Jessica</div>
                  <div className="mt-1 text-gray-400">DDS NYU'22</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="" /> */}
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-base sm:text-lg leading-8 text-white font-sans font-light">
                <p>
                  “Without Scrub Network's support I would never have negotiated my contract. I feel better knowing that I'm better protected and didn't leave money on the table.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-sm sm:text-base">
                  <div className="font-semibold text-white">Daniel</div>
                  <div className="mt-1 text-gray-400">DDS NYU'21</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
