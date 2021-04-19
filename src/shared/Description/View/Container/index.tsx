import React from 'react';
import { UserAndPostProps } from 'shared/types';
import { Text } from 'shared/Description/View/Components/Text';

export const Description: React.FC<UserAndPostProps> = ({
  title = 'Title',
  username = 'Username',
}) => (
  <div className='text-left'>
    {title && username && <Text title={'title'} username={username} />}
  </div>
);
