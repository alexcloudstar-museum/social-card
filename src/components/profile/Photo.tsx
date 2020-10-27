import React from 'react';

type PhotoProps = {
  image: string;
};

export const Photo: React.FC<PhotoProps> = ({ image }) => {
  return (
    <div className='Photo mt-1'>
      <img src={image} alt='Dummy User' />
    </div>
  );
};
