export default function Testimonials() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" /> */}
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-base sm:text-lg leading-8 text-white font-sans font-light">
                <p>
                  “After months of job search stress, Scrub Network became my saving grace. Their invaluable guidance made my job hunt much smoother and allowed me to concentrate on completing residency.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800 object-cover object-top"
                  src="/testimonials/jess_headshot.jpg"
                  alt=""
                />
                <div className="text-sm sm:text-base">
                  <div className="font-semibold text-white">Jessica</div>
                  <div className="mt-1 text-gray-400">DDS NYU&apos;22</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="" /> */}
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-base sm:text-lg leading-8 text-white font-sans font-light">
                <p>
                  “Thanks to Scrub Network, I was able to navigate my contract negotiations successfully. It brings me peace of mind to know that I am better protected, and I can confidently say I am happy with my contract.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800 object-cover"
                  src="/testimonials/daniel_headshot.jpg"
                  alt=""
                />
                <div className="text-sm sm:text-base">
                  <div className="font-semibold text-white">Daniel</div>
                  <div className="mt-1 text-gray-400">DDS NYU&apos;21</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
