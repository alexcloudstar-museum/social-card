import React from 'react';
import { Avatar, AvatarProps } from '../Avatar';
import { Profile } from '../Profile';
import './index.css';

type BackgroundProps = AvatarProps & {
  text?: string;
};

export const Background: React.FC<BackgroundProps> = ({
  text,
  width,
  height,
}) => {
  return (
    <div className='Background mt-4'>
      <Avatar shortUsername={'AC'} width={width} height={height} />
      <h3 className='mt-5 ml-5 pl-3 text-white heading'>{text}</h3>
      <Profile />
    </div>
  );
};
