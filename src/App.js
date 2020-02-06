import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [hasPledged, setHasPledged] = useState(false);
	const [amountPledged, setAmountPledged] = useState(750);
	const [goalAmount] = useState(1000);
	const [formValue, setFormValue] = useState(0);
	const [percentageOfGoal, setPercentageOfGoal] = useState(75);
	const [progressBarColor, setProgressBarColor] = useState('#EF5F3C');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const calculatePercentage = () => {
			return parseInt((Number(amountPledged) / Number(goalAmount)) * 100);
		};
		setPercentageOfGoal(calculatePercentage());
	}, [amountPledged, goalAmount]);

	useEffect(() => {
		const updateColors = () => {
			if (percentageOfGoal < 100) {
				return '#EF5F3C';
			}
			return '#1CBC2C';
		};
		setProgressBarColor(updateColors());
	}, [percentageOfGoal]);

	const validateInput = e => {
		let input = e.target.value;
		setErrorMessage('');
		if (Number.isInteger(+input)) {
			return setFormValue(input);
		} else if (Number.isNaN(+input)) {
			return setErrorMessage(
				'You have entered something other than a number. Please try again.'
			);
		} else if (!Number.isInteger(+input)) {
			return setErrorMessage(
				'Your pledge has to be in whole numbers. Please try again.'
			);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (formValue >= 1) {
			setAmountPledged(Number(amountPledged) + Number(formValue));
			setHasPledged(!hasPledged);
			e.target.reset();
		} else {
			return setErrorMessage(
				"We're sorry, something went wrong. Please try again."
			);
		}
	};

	const toggleForm = () => {
		setHasPledged(!hasPledged);
		setFormValue(0);
		setErrorMessage('');
	};

	const setWidth = () => {
		if (percentageOfGoal < 100) {
			return percentageOfGoal + '%';
		}
		return '100%';
	};

	return (
		<div className="App">
			<div className="container">
				<h2>The fundraising widget</h2>
				<div className="tooltip">
					<strong id="fundraise_remainingText">{percentageOfGoal}%</strong> of
					the goal funded
				</div>
				<div className="boxFrame">
					<div className="progressBar_container">
						<div
							className="progressBar_bar inProgress"
							id="fundraise_progressBar"
							style={{
								width: setWidth(),
								backgroundColor: progressBarColor
							}}
						></div>
					</div>
					<div className="boxFrame_content">
						<p>
							Only 3 days left to fund this project,{' '}
							<strong id="fundraise_currentFundingText">
								${amountPledged}
							</strong>{' '}
							has been raised towards the goal to raise{' '}
							<strong id="fundraise_goalText">${goalAmount}</strong>.
						</p>
						<p>
							Pledge money by entering the sum in the field below and press
							pledge, we already know your credit card details.
						</p>
						{hasPledged ? (
							<div className="notification notification-success">
								Thank you for your pledge!
								<button onClick={toggleForm}>Close</button>
							</div>
						) : (
							<form id="fundraise_form" onSubmit={handleSubmit}>
								<input
									id="fundraise_amount"
									type="text"
									autoComplete="off"
									onChange={validateInput}
								/>
								<input
									type="submit"
									id="fundraise_pledgeButton"
									value="Pledge"
								/>
							</form>
						)}
						<span className={errorMessage && 'error-message'}>
							{errorMessage}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
