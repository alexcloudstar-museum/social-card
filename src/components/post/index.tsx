import React from 'react';
import './index.css';
import { ShortDescription } from './ShortDescription';
import { Title } from './Title';
import { Website } from './Website';

export const Post = () => {
  return (
    <div className='col-sm-12 p-0'>
      <div className='Post pl-3'>
        <Title text={'Learning React? Start Small.'} />
        <ShortDescription
          text={
            "Can't pry yourself away from the tutorials? The cure is to make tiny little experiments app."
          }
        />
        <Website website={'alexcloudstar.com'} />
      </div>
    </div>
  );
};
