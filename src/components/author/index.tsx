import React from 'react';
import styled from 'styled-components';
import { Name } from './Name';
import { Username } from './Username';
import { Date } from './Date';
import { Caret } from './Caret';
import { UserProps } from '../../types';

const AuthorWrapper = styled.div`
  h3 {
    font-size: 18px;
  }

  h3 {
    span {
      font-weight: 400;
    }
  }

  .text-grey {
    color: #617585;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (max-width: 991px) {
    h3 {
      font-size: 14px;
    }
  }
`;

export const Author: React.FC<UserProps> = ({ name, username }) => {
  return (
    <AuthorWrapper>
      {name && <Name name={name} classNames={'name'} />}
      {username && <Username username={username} />}
      <Date date='Sep 10' />
      <Caret icon={'fas fa-angle-down'} />
    </AuthorWrapper>
  );
};
