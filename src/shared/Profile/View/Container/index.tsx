import React, { FC } from 'react';
import { Name } from 'shared/Author/View/components';
import { UserAndPostProps } from 'shared/types';

import DummyUser from 'assets/dummy_user.png';
import { Photo } from '../components/Photo';
import { ProfileWrapper } from '../style';

export const Profile: FC<UserAndPostProps> = ({ name }) => {
  return (
    <ProfileWrapper className='mt-4 pb-2 mr-2'>
      <div className='bg-white d-flex'>
        {name && <Name name={name} classNames={'mb-auto mt-auto pl-2 pr-2'} />}
        <Photo image={DummyUser} />
      </div>
    </ProfileWrapper>
  );
};
