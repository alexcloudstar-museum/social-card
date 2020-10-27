import React from 'react';
import './index.css';
import { Name } from './Name';
import { Username } from './Username';
import { Date } from './Date';
import { Caret } from './Caret';

export const Author = () => {
  return (
    <div className='Author'>
      <Name name={'Alex Cloudstar'} classNames={'name'} />
      <Username username={'AlexCloudstar'} />
      <Date date='Sep 10' />
      <Caret icon={'fas fa-angle-down'} />
    </div>
  );
};
