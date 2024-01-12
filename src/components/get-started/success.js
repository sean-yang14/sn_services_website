import { XMarkIcon, CheckIcon } from'@heroicons/react/24/outline';
import Link from 'next/link';

export default function Success() {
  return (

			<div className='flex justify-center text-center items-center font-serif bg-background pb-10 pt-20 sm:pb-16 sm:pt-28 px-6 lg:px-8'>
				<div className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-7 pb-14 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:pt-10 sm:pb-16'>
					<div>
						<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-logo'>
							<CheckIcon
								className='h-6 w-6 text-primary'
								aria-hidden='true'
							/>
						</div>
						<div className='mt-3 text-center sm:mt-5'>
							<h3 className='text-lg sm:text-xl font-semibold leading-6'>
								Form Submitted
							</h3>
							<div className='mt-2'>
								<p className='text-sm sm:text-base font-sans font-light'>
									Thank you for choosing Scrub Network. We&#39;ll be in touch with
									next steps shortly.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-10 sm:mt-12'>
						<Link href="/" type="button" className="transition group w-full flex items-center relative text-sm sm:text-base font-medium font-sans">
							<div
								className="z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950  text-[#d2c0ae] shadow-sm border-[1px] border-logo px-6 py-2 rounded-md absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
							>
								Home Page
							</div>
							<div className="duration-300 z-1 shadow-sm bg-[#d2c0ae] py-2 px-6 rounded-md absolute right-1/2 top-1/2 transform translate-x-[45%] -translate-y-[33%] group-hover:translate-x-[48%] group-hover:-translate-y-[40%]">
								<div className="text-logo invisible">
									Home Page
								</div>
							</div>
						</Link>
						{/* Button that takes you back to the form */}
						{/* <button
							onClick={() =>
								setStatus((prev) => ({
									...prev,
									submitted: false,
								}))
							}
							className='inline-flex w-full justify-center rounded-md border border-transparent bg-logo px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
						>
							Close
						</button> */}
					</div>
				</div>
			</div>

	
  )
}