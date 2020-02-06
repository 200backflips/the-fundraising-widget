import React from 'react';
import './Notification.css';

export const Notification = ({ toggleForm }) => {
	return (
		<div className="Notification Notification-success">
			Thank you for your pledge!
			<button onClick={toggleForm}>Close</button>
		</div>
	);
};
