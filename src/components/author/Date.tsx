import React from 'react';

type DateProps = {
  date: string;
};

export const Date: React.FC<DateProps> = ({ date }) => {
  return (
    <h3 className='Date'>
      <span className='text-grey'>&nbsp;{date}&nbsp;</span>
    </h3>
  );
};
