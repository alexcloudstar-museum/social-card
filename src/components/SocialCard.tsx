import React from 'react';
import { Avatar } from './Avatar';
import { Body } from './Body';

const SocialCard = () => {
  return (
    <div className='SocialCard mb-3 row'>
      <Avatar width={70} height={70} shortUsername={'AC'} />
      <Body />
    </div>
  );
};

export default SocialCard;
