import React from 'react';

export default function Footer() {
	return (
		<div className='flex flex-col items-center xl:flex-row xl:justify-center pb-5 mt-8 text-xs text-[#5c5e62] font-semibold space-y-3 xl:space-y-0 xl:space-x-3'>
			<p>Tesla © 2022</p>
			<p>Privacy & Legal</p>
			<p>Vehicle Recalls</p>
			<p className='hidden xl:inline-flex'>Contact </p>
			<p>Careers</p>
			<p>News</p>
			<p className='hidden xl:inline-flex'>Engage</p>
			<p className='hidden xl:inline-flex'>Locations</p>
		</div>
	);
}
