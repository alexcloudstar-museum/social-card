import React, { FC } from 'react';
import PhotoProps from 'shared/Profile/Data/types/PhotoType';

export const Photo: FC<PhotoProps> = ({ image }) => (
  <div className='Photo mt-1'>
    <img src={image} alt='Dummy User' />
  </div>
);
