import React from 'react';
import './index.css';
import { Photo } from './Photo';
import DummyUser from '../../assets/dummy_user.png';
import { Name } from '../Author/Name';

export const Profile = () => {
  return (
    <div className='Profile mt-4 pb-2 mr-2'>
      <div className='bg-white d-flex'>
        <Name name={'Dave Ceddia'} classNames={'mb-auto mt-auto pl-2 pr-2'} />
        <Photo image={DummyUser} />
      </div>
    </div>
  );
};
