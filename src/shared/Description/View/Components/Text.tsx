import React from 'react';
import { UserAndPostProps } from 'shared/types';
import { TextWrapper } from '../style';

export const Text: React.FC<UserAndPostProps> = ({ title, username }) => (
  <TextWrapper>
    {title && <h5>Title: {title}</h5>}
    {username && (
      <h5>
        Author: <span>@{username}</span>
      </h5>
    )}
  </TextWrapper>
);
