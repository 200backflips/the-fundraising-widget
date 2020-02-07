import React from 'react';
import './Tooltip.css';

export const Tooltip = ({ percentageOfGoal }) => {
  return (
    <div className="Tooltip">
      <strong>{percentageOfGoal}%</strong> of the goal funded
    </div>
  );
};
