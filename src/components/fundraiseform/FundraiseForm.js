import React, { useState } from 'react';
import './FundraiseForm.css';

export const FundraiseForm = ({ props }) => {
	const { handleSubmit, setFormValue } = props;
	const [errorMessage, setErrorMessage] = useState('');

	const validateInput = e => {
		setErrorMessage('');
		const input = +e.target.value;
		if (Number.isInteger(input)) {
			return setFormValue(input);
		} else if (Number.isNaN(input)) {
			setFormValue(0);
			return setErrorMessage(
				'You have entered something other than a number. Please try again.'
			);
		} else if (!Number.isInteger(input)) {
			setFormValue(0);
			return setErrorMessage(
				'Your pledge has to be in whole numbers. Please try again.'
			);
		}
	};

	return (
		<form id="fundraise_form" onSubmit={handleSubmit}>
			<input
				id="fundraise_amount"
				type="text"
				autoComplete="off"
				onChange={validateInput}
			/>
			<input type="submit" id="fundraise_pledgeButton" value="Pledge" />
			<span className={errorMessage && 'ErrorMessage'}>{errorMessage}</span>
		</form>
	);
};
