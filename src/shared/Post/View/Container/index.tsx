import { FC } from 'react';
import { UserAndPostProps } from 'shared/types';
import { Title, Website, ShortDescription } from '../components';

import { PostWrapper } from '../style';

export const Post: FC<UserAndPostProps> = ({ title, body, website }) => {
  return (
    <div className='col-sm-12 p-0'>
      <PostWrapper className='pl-3'>
        {title && <Title text={'Learning React? Start Small.'} />}
        {body && <ShortDescription body={body} />}

        <Website website={website} />
      </PostWrapper>
    </div>
  );
};
