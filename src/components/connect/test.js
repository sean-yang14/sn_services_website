import { XMarkIcon, CheckIcon } from'@heroicons/react/24/outline';

export default function Test() {
  return (

			<div className='flex h-[50vh] justify-center p-4 text-center items-center p-0 font-serif bg-background'>
				<div className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
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
								<p className='text-sm sm:text-base font-sans'>
									Thank you for choosing us. We&#39;ll be in touch with
									next steps soon.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-5 sm:mt-6'>
						<button
							onClick={() =>
								setStatus((prev) => ({
									...prev,
									submitted: false,
								}))
							}
							className='inline-flex w-full justify-center rounded-md border border-transparent bg-logo px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
						>
							Close
						</button>
					</div>
				</div>
			</div>

	
  )
}