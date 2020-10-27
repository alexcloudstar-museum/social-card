import React from 'react';
import './index.css';

export type AvatarProps = {
  shortUsername?: string;
  width: number;
  height: number;
};

export const Avatar: React.FC<AvatarProps> = ({
  shortUsername,
  width,
  height,
}) => {
  return (
    <div className='avatar-col col-sm-12 col-md-2'>
      <div
        className='Avatar'
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className='image'></div>
        <h2 className='image-user'>{shortUsername}</h2>
      </div>
    </div>
  );
};
