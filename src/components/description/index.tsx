import React from 'react';
import { Text } from './Text';
import { UserAndPostProps } from '../../types';

export const Description: React.FC<UserAndPostProps> = ({
  title,
  username,
}) => {
  return (
    <div className='text-left'>
      {title && username && <Text title={title} username={username} />}
    </div>
  );
};
