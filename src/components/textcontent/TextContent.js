import React from 'react';

export const TextContent = ({ props }) => {
  const { amountPledged, goalAmount } = props;
  return (
    <div>
      <p>
        Only 3 days left to fund this project, <strong>${amountPledged}</strong>{' '}
        has been raised towards the goal to raise <strong>${goalAmount}</strong>
        .
      </p>
      <p>
        Pledge money by entering the sum in the field below and press pledge, we
        already know your credit card details.
      </p>
    </div>
  );
};
