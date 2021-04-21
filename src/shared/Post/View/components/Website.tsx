import { FC } from 'react';
import { UserAndPostProps } from 'shared/types';

const Website: FC<UserAndPostProps> = ({ website }) => (
  <div className='pt-1 pb-2'>
    {website && <span className='text-grey'>{website}</span>}
  </div>
);

export default Website;
