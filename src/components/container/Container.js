import React, { useState, useEffect } from 'react';
import './Container.css';
import { Tooltip } from '../tooltip/Tooltip';
import { ProgressBar } from '../progressbar/ProgressBar';
import { TextContent } from '../textcontent/TextContent';
import { Notification } from '../notification/Notification';
import { FundraiseForm } from '../fundraiseform/FundraiseForm';

export const Container = () => {
  const [percentageOfGoal, setPercentageOfGoal] = useState(75);
  const [amountPledged, setAmountPledged] = useState(750);
  const [goalAmount] = useState(1000);
  const [hasPledged, setHasPledged] = useState(false);
  const [formValue, setFormValue] = useState(0);

  useEffect(() => {
    setPercentageOfGoal(parseInt((amountPledged / goalAmount) * 100));
  }, [amountPledged, goalAmount]);

  const handleSubmit = e => {
    e.preventDefault();
    if (formValue >= 1) {
      setAmountPledged(parseInt(amountPledged + formValue));
      setHasPledged(!hasPledged);
      e.target.reset();
    }
  };

  return (
    <div className="Container">
      <h2>The fundraising widget</h2>
      <Tooltip percentageOfGoal={percentageOfGoal} />
      <div className="boxFrame">
        <ProgressBar percentageOfGoal={percentageOfGoal} />
        <div className="boxFrame_content">
          <TextContent props={{ amountPledged, goalAmount }} />
          {hasPledged ? (
            <Notification props={{ setHasPledged, hasPledged, setFormValue }} />
          ) : (
            <FundraiseForm props={{ handleSubmit, setFormValue }} />
          )}
        </div>
      </div>
    </div>
  );
};
