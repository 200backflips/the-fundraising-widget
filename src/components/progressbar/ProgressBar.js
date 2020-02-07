import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ percentageOfGoal }) => {
  const [progressBarColor, setProgressBarColor] = useState('#EF5F3C');

  useEffect(() => {
    setProgressBarColor(() => {
      if (percentageOfGoal < 100) {
        return '#EF5F3C';
      }
      return '#1CBC2C';
    });
  }, [percentageOfGoal]);

  const setWidth = () => {
    if (percentageOfGoal < 100) {
      return `${percentageOfGoal}%`;
    }
    return '100%';
  };

  return (
    <div className="ProgressBar-container">
      <div
        className="ProgressBar-bar"
        style={{
          width: setWidth(percentageOfGoal),
          backgroundColor: progressBarColor,
        }}
      ></div>
    </div>
  );
};
