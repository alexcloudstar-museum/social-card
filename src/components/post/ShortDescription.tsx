import React from 'react';
import { UserAndPostProps } from '../../types';

export const ShortDescription: React.FC<UserAndPostProps> = ({ body }) => {
  return <>{body && <p>{body}</p>}</>;
};
