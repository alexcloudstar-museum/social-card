import React from 'react';
import { BackgroundWrapper } from './style';

import { AvatarType } from 'shared/Avatar/Data/types';
import { UserAndPostProps } from 'shared/types';

import { Avatar } from 'shared/Avatar/View/components';
import { Profile } from 'shared/Profile/View/Container';

type Props = AvatarType & UserAndPostProps;

export const Background: React.FC<Props> = ({ title, name, width, height }) => {
  return (
    <BackgroundWrapper className='Background mt-4'>
      <Avatar
        shortUsername={'AC'}
        borderRadius={false}
        width={width}
        height={height}
      />
      {title && (
        <h3 className='mt-5 mb-5 ml-5 pl-3 text-white heading'>{title}</h3>
      )}
      {name && <Profile name={name} />}
    </BackgroundWrapper>
  );
};
