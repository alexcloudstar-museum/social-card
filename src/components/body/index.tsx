import React from 'react';
import { Author } from '../Author';
import { Background } from '../Background';
import { Description } from '../Description';
import { Post } from '../Post';
import { Reactions } from '../Reactions';

export const Body = () => {
  return (
    <div className='col-sm-12 col-md-10 mt-auto mb-auto'>
      <div className='Body'>
        <Author />
        <Description />
        <Background
          width={50}
          height={50}
          text={'Learning React? Start Small.'}
        />
        <Post />
        <Reactions />
      </div>
    </div>
  );
};
