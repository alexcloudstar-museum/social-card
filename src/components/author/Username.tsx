import React from 'react';

type UsernameProps = {
  username: string;
};

export const Username: React.FC<UsernameProps> = ({ username }) => {
  return (
    <h3 className='Username'>
      &nbsp;<span className='text-grey'>@{username} &#183;</span>
    </h3>
  );
};
