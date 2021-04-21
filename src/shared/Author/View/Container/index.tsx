import React, { FC } from 'react';
import { Avatar } from 'shared/Avatar/View/components';
import { Description } from 'shared/Description/View/Container';

import { UserType } from 'shared/types';
import { Name, Username, Date, Caret } from '../components';

import { AuthorWrapper } from '../style';

export const Author: FC<UserType> = ({ name, username, title }) => (
  <AuthorWrapper>
    <Avatar width={70} height={70} />

    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Author name</h1>
        {name && <Name name={name} classNames={'name'} />}
        {username && <Username username={username} />}
        <Date date='Sep 10' />
        <Caret icon={'fas fa-angle-down'} />
      </div>
      {username && title && <Description username={username} title={title} />}
    </div>
  </AuthorWrapper>
);
