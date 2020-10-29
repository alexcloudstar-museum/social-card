import React from 'react';
import styled from 'styled-components';
import { UserAndPostProps } from '../../types';

const TextWrapper = styled.div`
  h5 {
    font-weight: 400;
    font-size: 16px;
  }

  span {
    color: #63afe7;
  }
`;

export const Text: React.FC<UserAndPostProps> = ({ title, username }) => {
  return (
    <TextWrapper>
      {title && <h5>{title}</h5>}
      {username && (
        <h5>
          author: <span>@{username}</span>
        </h5>
      )}
    </TextWrapper>
  );
};
