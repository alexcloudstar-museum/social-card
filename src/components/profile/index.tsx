import React from 'react';
import styled from 'styled-components';
import { Photo } from './Photo';
import DummyUser from '../../assets/dummy_user.png';
import { Name } from '../Author/Name';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 50px;
    height: 50px;
  }

  h3 {
    line-height: 50px;
    color: #ffa003;
  }
`;

export const Profile = () => {
  return (
    <ProfileWrapper className='mt-4 pb-2 mr-2'>
      <div className='bg-white d-flex'>
        <Name name={'Dave Ceddia'} classNames={'mb-auto mt-auto pl-2 pr-2'} />
        <Photo image={DummyUser} />
      </div>
    </ProfileWrapper>
  );
};
