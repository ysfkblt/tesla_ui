import React from 'react';
import style from './Button.module.css';

const Button = ({ imp, text, acs }) => {
	return (
		<div
			className={
				imp == 'primary'
					? style.button
					: imp == 'secondary'
					? style.button__white
					: acs
					? style.acs
					: ''
			}
		>
			<p>{text}</p>
		</div>
	);
};

export default Button;
