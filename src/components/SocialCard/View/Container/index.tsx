import React, { FC } from 'react';
import { SocialCardWrapper } from '../style';

import { SocialCardType } from 'components/SocialCard/Data/types';

import { Body } from 'shared/Body/View/Container';

const SocialCard: FC<SocialCardType> = ({ className }) => (
  <SocialCardWrapper className='SocialCard mb-3 row m-0'>
    <Body
      name={'John Doe'}
      username={'Doe'}
      website={'www.johndoe.com'}
      title={'Dev'}
      body={'Body post'}
    />
  </SocialCardWrapper>
);

export default SocialCard;
