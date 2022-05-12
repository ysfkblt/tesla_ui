import React from 'react';
import './Item.css';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function Item({
	acs,
	title,
	desc,
	backgroundImg,
	leftBtnTxt,
	rightBtnTxt,
	twoButtons,
	first,
	BtnTxt,
}) {
	return (
		<div
			className='h-screen w-screen flex bg-center bg-no-repeat bg-cover justify-center '
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<div className='flex flex-col justify-between  mb-[9vw] xl:mb-[1vw] '>
				<div className='inline-flex flex-col text-center mt-[18vw]  xl:mt-[8vw] mb-[28vw]  '>
					<p className='font-semibold text-[40px] xl:text-[2.6vw] '>
						{title}
					</p>
					<p className='text-[14px] xl:text-[0.9vw] font-medium '>
						{desc}
					</p>
				</div>
				{acs && (
					<div className='inline-flex flex-col md:flex-row self-center mb-14 '>
						<Button acs text={BtnTxt} />
					</div>
				)}

				{twoButtons && (
					<div className='inline-flex flex-col md:flex-row self-center '>
						<Button imp='primary' text={leftBtnTxt} />
						<Button imp='secondary' text={rightBtnTxt} />
					</div>
				)}

				{first && (
					<ChevronDownIcon className='hidden xl:inline-flex self-center arrowanimation h-5 opacity-70' />
				)}
			</div>
		</div>
	);
}
