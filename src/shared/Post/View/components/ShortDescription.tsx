import { FC } from 'react';
import { UserAndPostProps } from 'shared/types';

const ShortDescription: FC<UserAndPostProps> = ({ body }) => (
  <>{body && <p>{body}</p>}</>
);

export default ShortDescription;
