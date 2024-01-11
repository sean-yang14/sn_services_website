import { useState } from'react';
import axios from'axios';
import { XMarkIcon, CheckIcon } from'@heroicons/react/24/outline';

export default function Form() {
	const [validations, setValidations] = useState('');
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: {
			error: false,
		},
	});
	const [formData, setFormData] = useState({
		referral:'',
		first_name:'',
		last_name:'',		
		email:'',
		currentLocation:'',
		phone:'',
		resume:'',
		background:'',
		position_type:'',
		experience_type:'',
		specialty:'',
		location_interests:'',
		timeline:'',
		comp_range:'',
		employer_types:[],
		other_info:'',
		sponsorship:'',
	});

	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: {
					error: false,
				},
			});
			setFormData({
				referral:'',
				first_name:'',
				last_name:'',
				email:'',
				currentLocation:'',
				phone:'',
				resume:'',
				background:'',
				position_type:'',
				experience_type:'',
				specialty:'',
				location_interests:'',
				timeline:'',
				comp_range:'',
				employer_types:[],
				other_info:'',
				sponsorship:'',
			});
		} else {
			setStatus({
				info: {
					error: true,
				},
			});
			console.log(msg);
		}
	};

	const handleCheckboxChange = (value) => {
		const selectedEmployerType = value.target.value
    // Check if the value is already in the array
    if (formData.employer_types.includes(selectedEmployerType)) {
			// If it is, remove it
			setFormData((prev) => ({
				...prev,
				employer_types: formData.employer_types.filter((v) => v !== selectedEmployerType)
			}));
    } else {
      // If it's not, add it
			setFormData((prev) => ({
				...prev,
				employer_types: [...formData.employer_types, selectedEmployerType]
			}));
    }
		
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
		setValidations('');
  };
	
	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
		setValidations('');
	};


	const handleOnSubmit = (e) => {
		e.preventDefault();

		// check if employment questions have been filled out
		// if (!formData.sponsorship || !formData.licensed) {
		// 	setValidations('All employment questions must be answered');
		// 	return;
		// }

		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

		setFormData((prev) => ({
			...prev,
		}));

		// axios({
		// 	method:'POST',
		// 	url:'https://formspree.io/f/xqkoqbll',
		// 	data: formData,
		// 	headers: {
		// 		'content-type':'multipart/form-data',
		// 	},
		// })
		// 	.then((response) => {
		// 		handleServerResponse(
		// 			true,
		// 			'Thank you, your message has been submitted'
		// 		);
		// 	})
		// 	.catch((error) => {
		// 		handleServerResponse(false, error.response.data.error);
		// 	});
		
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const droppedFile = e.dataTransfer.files[0];
		setFormData((prev) => ({
			...prev,
			resume: droppedFile,
		}));
	};

	const handleFileInputChange = (e) => {
		const selectedFile = e.target.files[0];
		setFormData((prev) => ({
			...prev,
			resume: selectedFile,
		}));
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleCloseClick = (e) => {
		setFormData((prev) => ({
			...prev,
			resume:'',
		}));
	};

  const backgrounds = [
    { id:'dentist', title:'Dentist' },
    { id:'rdh', title:'RDH' },
  ]

  const experienceTypes = [
    { id:'newGrad', title:'D4 or New Grad' },
    { id:'resident', title:'Resident' },
    { id:'experienced', title:'Experienced' },
  ]

  const positionTypes = [
    { id:'permanent', title:'Permanent' },
    { id:'locum', title:'Locum / Temp' },
    { id:'both', title:'Open to Both' },
  ]

  const callOptions = [
    { id:'yesCall', title:'Yes' },
    { id:'noCall', title:'No' },
  ]

  const sponsorshipTypes = [
    { id:'yesSponsor', title:'Yes' },
    { id:'noSponsor', title:'No' },
  ]

	if (status.submitted) {
		return (
			<div className='flex min-h-screen justify-center p-4 text-center items-center p-0 font-serif bg-background'>
				<div className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
					<div>
						<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
							<CheckIcon
								className='h-6 w-6 text-green-600'
								aria-hidden='true'
							/>
						</div>
						<div className='mt-3 text-center sm:mt-5'>
							<h3 className='text-xl font-medium leading-6'>
								Application Sent
							</h3>
							<div className='mt-2'>
								<p className='text-base'>
									Thank you for using Scrub Network. We&#39;ll be in touch with
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
		);
	}

	return (
		<>
			<div className='flex-1 font-sans font-light text-sm sm:text-base py-24 sm:pb-32 sm:pt-28 bg-background text-font-color'>
				<div className='relative mx-auto max-w-5xl md:px-8 xl:px-0'>
					<div>
						<div className='px-4 sm:px-6 md:px-0 border-b-2 pb-6 border-primary'>
							<h1 className='font-serif text-2xl sm:text-3xl font-bold tracking-tight'>
								Help us learn what you&apos;re looking for.
							</h1>
							<p className='mt-2 opacity-85'>Only the first question and contact information are required fields.</p>
							<p className='mt-2 text-xs sm:text-sm opacity-75'>7 min to complete</p>
						</div>
						<form
							className='space-y-8 divide-y divide-gray-200 mt-6'
							onSubmit={handleOnSubmit}
						>
							{/* form inputs */}
							<div className='space-y-8 divide-y divide-gray-200'>
								{/* call request */}
                <div>
									<h3 className='font-serif text-lg sm:text-xl font-semibold leading-6'>
										Interested in setting up a call? (Required)
									</h3>
                  <div className='mt-1'>
                    <p>Calls are a great way for us to learn what you&apos;re looking for, but we understand that not everyone is interested. We&apos;ll work in a way that best suits you.</p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">call</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
                        {callOptions.map((callOption) => (
                          <div key={callOption.id} className="flex items-center">
                            <input
                              id={callOption.id}
                              name="call"
                              type="radio"
                              // defaultChecked={callOption.id ==='yesCall'}
															value={callOption.title}
															onChange={handleChange}
                              className="h-4 w-4 border-gray-300 focus:ring-logo text-logo"
															required
                            />
                            <label htmlFor={callOption.id} className="ml-3 block leading-6">
                              {callOption.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
								</div>

                {/* referral info */}
                <div className='pt-8'>
									<h3 className='font-serif text-lg sm:text-xl font-semibold leading-6'>
										Referral information
									</h3>
									<div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
										<div className='sm:col-span-3'>
											<label
												htmlFor='referral'
												className='block'
											>
												Referrer&apos;s email
											</label>
											<div className='mt-1'>
												<input
													type='email'
													name='referral'
													id='referral'
													value={formData.referral}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
												/>
											</div>
										</div>
									</div>
								</div>

                {/* contact info */}
								<div className='pt-8'>
									<h3 className='font-serif leading-6 text-lg sm:text-xl font-semibold'>
										Contact information (Required)
									</h3>
									<div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
										<div className='sm:col-span-3'>
											<label
												htmlFor='first_name'
												className='block'
											>
												First name
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='first_name'
													id='first_name'
													value={formData.first_name}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
													required
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='last_name'
												className='block'
											>
												Last name
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='last_name'
													id='last_name'
													value={formData.last_name}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
													required
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='email'
												className='block'
											>
												Email address
											</label>
											<div className='mt-1'>
												<input													
													id='email'
													name='email'
													type='email'
													value={formData.email}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
													required
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='city'
												className='block'
											>
												City, state (optional)
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='currentLocation'
													id='currentLocation'
													value={formData.location}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='phone'
												className='block'
											>
												Phone number (optional)
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='phone'
													id='phone'
													value={formData.phone}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
												/>
											</div>
										</div>
									</div>
								</div>

                {/* resume info */}
								<div className='pt-8'>
									<h3 className='font-serif text-lg sm:text-xl font-semibold leading-6'>
										Add your resume
									</h3>

									<div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
										<div className='sm:col-span-3'>
											<label
												htmlFor='resume'
												className='block'
											>
												Resume
											</label>
											<div
												onDrop={handleDrop}
												onDragOver={handleDragOver}
												className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
											>
												<div className='space-y-1 text-center'>
													<svg
														className='mx-auto h-12 w-12'
														stroke='currentColor'
														fill='none'
														viewBox='0 0 48 48'
														aria-hidden='true'
													>
														<path
															d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
															strokeWidth={2}
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
													{formData.resume ? (
														<div className='flex gap-x-2 items-center'>
															<p className='text-logo'>
																{formData.resume.name}
															</p>
															<XMarkIcon
																className='cursor-pointer h-4 w-4 z-10 border-[1px] rounded-full border-gray-700'
																aria-hidden='true'
																onClick={handleCloseClick}
															/>
														</div>
													) : (
														<>
															<div className='flex'>
																<label className='relative cursor-pointer px-2 rounded-md bg-primary font-medium text-white underline focus-within:outline-none focus-within:ring-2 focus-within:ring-logo focus-within:ring-offset-2 hover:text-logo'>
																	<span>Upload a file</span>
																	<input
																		// required
																		id='resume'
																		name='resume'
																		type='file'
																		accept='.docx, .doc, .pdf'
																		className='sr-only'
																		onChange={handleFileInputChange}
																	/>
																</label>
																<p className='pl-1'>or drag and drop</p>
															</div>
															<p>
																Use a pdf, docx, or doc
															</p>
														</>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* job search questions */}
								<div className='pt-8'>
									<div>
										<h3 className='font-serif text-lg sm:text-xl font-semibold leading-6'>
											Job Search Questions
										</h3>
										{/* {validations && (
											<h4 className='mt-4 text leading-6 text-red-500 text-sm'>
												{`${validations}`}
											</h4>
										)} */}
									</div>
                  
                  {/* job title question */}
                  <div className='mt-4'>
                    <p className="font-medium">What's your professional background?</p>
                    <fieldset className="mt-1">
                      <legend className="sr-only">Professional background</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
                        {backgrounds.map((background) => (
                          <div key={background.id} className="flex items-center">
                            <input
                              id={background.id}
                              name="background"
															onChange={handleChange}
                              type="radio"
															value={background.title}
                              // defaultChecked={background.id ==='email'}
                              className="h-4 w-4 border-gray-300 text-logo focus:ring-logo"
                            />
                            <label htmlFor={background.id} className="ml-3 block leading-6 ">
                              {background.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {/* specialty question */}
                  <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
										<div className='sm:col-span-3'>
											<label
												htmlFor='referral'
												className='block text-gray-800 font-medium'
											>
												Specialty (if applicable)
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='specialty'
													id='specialty'
													value={formData.specialty}
													onChange={handleChange}
													className='block w-full rounded-md border-gray-300 shadow-sm focus:border-logo focus:ring-logo'
												/>
											</div>
										</div>
									</div>

                  {/* experience question */}
                  <div className='mt-6'>
                    {/* <label className="font-semibold ">Professional Background</label> */}
                    <p className="text-gray-800 font-medium">Experience</p>
                    <fieldset className="mt-1">
                      <legend className="sr-only">Experience</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
                        {experienceTypes.map((experienceType) => (
                          <div key={experienceType.id} className="flex items-center">
                            <input
                              id={experienceType.id}
                              name="experience_type"
                              type="radio"
                              // defaultChecked={experienceType.id ==='email'}
															value={experienceType.title}
															onChange={handleChange}
                              className="h-4 w-4 border-gray-300 text-logo focus:ring-logo"
                            />
                            <label htmlFor={experienceType.id} className="ml-3 block leading-6 ">
                              {experienceType.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {/* job type question */}
                  <div className='mt-6'>
                    {/* <label className="font-semibold ">Professional Background</label> */}
                    <p className="text-gray-800 font-medium">Position types</p>
                    <fieldset className="mt-1">
                      <legend className="sr-only">Position types</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
                        {positionTypes.map((positionType) => (
                          <div key={positionType.id} className="flex items-center">
                            <input
                              id={positionType.id}
															value={positionType.title}
                              name="position_type"
                              type="radio"
                              // defaultChecked={positionType.id ==='email'}
															onChange={handleChange}
                              className="h-4 w-4 border-gray-300 text-logo focus:ring-logo"
                            />
                            <label htmlFor={positionType.id} className="ml-3 block leading-6 ">
                              {positionType.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {/* locations question */}
                  <div className='mt-6'>
                    <label htmlFor="location_interests" className="block text-gray-800 font-medium leading-6">
                      Locations of interest (Please be as specific as possible. Include city, state and distance/time willing to travel)
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="location_interests"
                        id="location_interests"
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:leading-6"
                        defaultValue={''}
												onChange={handleChange}
												value={formData.location_interests}
                      />
                    </div>
                  </div>

                  {/* timeline question */}
                  <div className='mt-6'>
                    <label htmlFor="timeline" className="block text-gray-800 font-medium leading-6 ">
                      What is your timeline for landing a job?
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="timeline"
                        id="timeline"
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:leading-6"
                        defaultValue={''}
												onChange={handleChange}
												value={formData.timeline}
                      />
                    </div>
                  </div>

                  {/* comp question */}
                  <div className='mt-6'>
                    <label htmlFor="comp_range" className="block text-gray-800 font-medium leading-6">
                      What is your expected compensation range?
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="comp_range"
                        id="comp_range"
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:leading-6"
                        defaultValue={''}
												onChange={handleChange}
												value={formData.comp_range}
                      />
                    </div>
                  </div>

                  {/* other question */}
                  <div className='mt-6'>
                    <label htmlFor="other_info" className="block text-gray-800 font-medium leading-6">
                      Anything else that&apos;s important for you?
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="other_info"
                        id="other_info"
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-logo sm:leading-6"
                        defaultValue={''}
												onChange={handleChange}
												value={formData.other_info}
                      />
                    </div>
                  </div>

                  {/* employer type questions */}
                  <div className='mt-6'>
										<fieldset>
											<legend className='sr-only'>employer type question</legend>
											<div
												className='text-gray-800 font-medium'
												aria-hidden='true'
											>
												What types of employers are interested in?
											</div>
											<div className='mt-1 space-y-3'>
												<div className='relative flex items-start'>
													<div className='flex h-5 items-center'>
														<input
															id='private_practice'
															name='employer_types'
															value='private_practice'
															type='checkbox'
															onChange={handleCheckboxChange}
															// checked={formData.sponsorship ==='yes'}
															className='h-4 w-4 rounded border-gray-300 text-logo focus:ring-logo'
														/>
													</div>
													<div className='ml-3'>
														<label
															htmlFor='private_practice'
															className=''
														>
															Private
														</label>
													</div>
												</div>
												<div className='relative flex items-start'>
													<div className='flex h-5 items-center'>
														<input
															id='dso'
															name='employer_types'
															value='dso'
															type='checkbox'
															onChange={handleCheckboxChange}
															// checked={formData.sponsorship ==='no'}
															className='h-4 w-4 rounded border-gray-300 text-logo focus:ring-logo'
														/>
													</div>
													<div className='ml-3'>
														<label
															htmlFor='dso'
															className=''
														>
															DSOs
														</label>
													</div>
												</div>
												<div className='relative flex items-start'>
													<div className='flex h-5 items-center'>
														<input
															id='fqhc'
															name='employer_types'
															value='fqhc'
															type='checkbox'
															onChange={handleCheckboxChange}
															// checked={formData.sponsorship ==='no'}
															className='h-4 w-4 rounded border-gray-300 text-logo focus:ring-logo'
														/>
													</div>
													<div className='ml-3'>
														<label
															htmlFor='fqhc'
															className=''
														>
															Federally Qualified Health Centers (FQHCs)
														</label>
													</div>
												</div>
												<div className='relative flex items-start'>
													<div className='flex h-5 items-center'>
														<input
															id='other_employer'
															name='employer_types'
															value='other_employer'
															type='checkbox'
															onChange={handleCheckboxChange}
															// checked={formData.sponsorship ==='no'}
															className='h-4 w-4 rounded border-gray-300 text-logo focus:ring-logo'
														/>
													</div>
													<div className='ml-3'>
														<label
															htmlFor='other_employer'
															className=''
														>
															Other
														</label>
													</div>
												</div>
											</div>
										</fieldset>
									</div>

                  {/* sponsorship question */}
									<div className='mt-6'>
                    <p className="text-gray-800 font-medium">Will you now or in the future require sponsorship for
												employment visa status?</p>
                    <fieldset className="mt-1">
                      <legend className="sr-only">Sponsorship types</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
                        {sponsorshipTypes.map((sponsorshipType) => (
                          <div key={sponsorshipType.id} className="flex items-center">
                            <input
                              id={sponsorshipType.id}
                              name="sponsorship"
                              type="radio"
															value={sponsorshipType.title}
															onChange={handleChange}
                              // defaultChecked={sponsorshipType.id ==='email'}
                              className="h-4 w-4 border-gray-300 text-logo focus:ring-logo"
                            />
                            <label htmlFor={sponsorshipType.id} className="ml-3 block leading-6 ">
                              {sponsorshipType.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
								</div>
							</div>

							{/* submit button */}
							<div className='pt-10 sm:pt-12'>
								<div className='flex justify-end'>
									<button type='submit' className="transition group w-full flex items-center relative lg:w-1/2">
										
										<div
											className="right-0 z-10 bg-neutral-900 duration-300 group-hover:bg-neutral-950 text-sm sm:text-base font-medium font-sans text-[#d2c0ae] shadow-sm border-[1px] border-logo w-1/3 lg:w-1/3 px-6 py-3 rounded-md absolute"
										>
											Submit
										</div>
										<div className="duration-300 z-1 shadow-sm bg-[#d2c0ae] py-3 px-6 pr-4 w-1/3 lg:w-1/3 rounded-md absolute right-0 transform -translate-x-[4%] translate-y-[20%] group-hover:-translate-x-[2.25%] group-hover:translate-y-[13%]">
											<div className="text-sm sm:text-base font-medium font-sans text-logo invisible">
												Filler
											</div>
										</div>
									</button>
								</div>
							</div>
							{/* <div className='pt-5'>
								<div className='flex justify-end'>
									<button
										type='submit'
										className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-logo py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-logo focus:ring-offset-2'
									>
										Submit
									</button>
								</div>
							</div> */}
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
