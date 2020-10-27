import React from 'react';

type WebsiteProps = {
  website: string;
};

export const Website: React.FC<WebsiteProps> = ({ website }) => {
  return (
    <div className='pt-1 pb-2'>
      <span className='text-grey'>{website}</span>
    </div>
  );
};
