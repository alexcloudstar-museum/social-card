import React, { FC } from 'react';
import { Author } from 'shared/Author/View/Container';
import { Background } from 'shared/Background/View';

import { BodyWrapper } from '../style';

import { Post } from 'shared/Post/View/Container';
import { Reactions } from 'shared/Reactions/View/Container';
import { UserAndPostProps } from 'shared/types';

export const Body: FC<UserAndPostProps> = ({
  name,
  username,
  title,
  body,
  website,
}) => (
  <BodyWrapper className='col-sm-12 col-md-10 mt-auto mb-auto'>
    <div className='Body'>
      {name && username && (
        <Author name={name} username={username} title={title} />
      )}
      {name && title && (
        <Background width={50} height={50} name={name} title={title} />
      )}
      {title && body && website && (
        <Post title={title} body={body} website={website} />
      )}
      <Reactions />
    </div>
  </BodyWrapper>
);
