import React from 'react';

type TitleProps = {
  text: string;
};

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className='pt-3'>
      <h2>{text}</h2>
    </div>
  );
};
