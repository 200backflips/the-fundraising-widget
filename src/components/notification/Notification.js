import React from 'react';
import './Notification.css';

export const Notification = ({ props }) => {
  const { setHasPledged, hasPledged, setFormValue } = props;

  const toggleForm = () => {
    setHasPledged(!hasPledged);
    setFormValue(0);
  };

  return (
    <div className="Notification Notification-success">
      Thank you for your pledge!
      <button type="button" onClick={toggleForm}>Close</button>
    </div>
  );
};
