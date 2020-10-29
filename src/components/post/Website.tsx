import React from 'react';
import { UserAndPostProps } from '../../types';

export const Website: React.FC<UserAndPostProps> = ({ website }) => {
  return (
    <div className='pt-1 pb-2'>
      {website && <span className='text-grey'>{website}</span>}
    </div>
  );
};
