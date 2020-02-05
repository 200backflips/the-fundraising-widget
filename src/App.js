import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const handleSubmit = () => null;

	return (
		<div className="App">
			<div class="container">
				<h2>The fundraising widget</h2>
				<div class="tooltip">
					<strong id="fundraise_remainingText">0%</strong> of the goal funded
				</div>
				<div class="boxFrame">
					<div class="progressBar_container">
						<div
							class="progressBar_bar inProgress"
							id="fundraise_progressBar"
						></div>
					</div>

					<div class="boxFrame_content">
						<p>
							Only 3 days left to fund this project,{' '}
							<strong id="fundraise_currentFundingText">$0</strong> has been
							raised towards the goal to raise{' '}
							<strong id="fundraise_goalText">$1000</strong>.
						</p>
						<p>
							Pledge money by entering the sum in the field below and press
							pledge, we already know your credit card details.
						</p>
						<form id="fundraise_form">
							<input id="fundraise_amount" type="text" />
							<input
								type="submit"
								id="fundraise_pledgeButton"
								value="Pledge"
								onSubmit={handleSubmit}
							/>
						</form>

						<div class="notification notification-success">
							Thank you for your pledge!
							<a href="#">Close</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
