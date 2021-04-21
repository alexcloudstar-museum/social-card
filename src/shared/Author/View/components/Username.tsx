import React, { FC } from 'react';
import UsernameType from 'shared/Author/Data/types/UsernameType';

const Username: FC<UsernameType> = ({ username }) => (
  <h3 className='Username'>
    &nbsp;<span className='text-grey'>@{username} &#183;</span>
  </h3>
);

export default Username;
