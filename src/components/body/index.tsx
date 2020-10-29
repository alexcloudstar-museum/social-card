import React from 'react';
import { Author } from '../Author';
import { Background } from '../Background';
import { Description } from '../Description';
import { Post } from '../Post';
import { Reactions } from '../Reactions';
import { BodyProps } from '../../types';

export const Body: React.FC<BodyProps> = ({ name }) => {
  return (
    <div className='col-sm-12 col-md-10 mt-auto mb-auto'>
      <div className='Body'>
        <Author name={name} />
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
