import { FC } from 'react';
import { TitleType } from 'shared/Post/Data/types';

const Title: FC<TitleType> = ({ text }) => (
  <div className='pt-3'>
    <h2>{text}</h2>
  </div>
);

export default Title;
