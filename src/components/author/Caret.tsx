import React from 'react';

type CaretProps = {
  icon: string;
};

export const Caret: React.FC<CaretProps> = ({ icon }) => {
  return (
    <span className='Caret text-grey ml-2'>
      <i className={icon}></i>
    </span>
  );
};
