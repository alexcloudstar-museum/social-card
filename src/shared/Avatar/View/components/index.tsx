import React, { FC } from 'react';

import { AvatarType } from 'shared/Avatar/Data/types';

import { AvatarWrapper, Image, ImageUser } from '../style';

export const Avatar: FC<AvatarType> = ({
  shortUsername = 'JD',
  width = 70,
  height = 70,
  borderRadius = true,
}) => (
  <div className='avatar-col col-sm-12 col-md-1'>
    <AvatarWrapper width={width} height={height} className='Avatar'>
      <Image
        width={width}
        height={height}
        borderRadius={borderRadius}
        className='image'
      />
      <ImageUser className='image-user'>{shortUsername}</ImageUser>
    </AvatarWrapper>
  </div>
);
