import React from 'react';
import { Author } from '../Author';
import { Background } from '../Background';
import { Description } from '../Description';
import { Post } from '../Post';
import { Reactions } from '../Reactions';
import { UserAndPostProps } from '../../types';

export const Body: React.FC<UserAndPostProps> = ({
  name,
  username,
  title,
  body,
  website,
}) => {
  return (
    <div className='col-sm-12 col-md-10 mt-auto mb-auto'>
      <div className='Body'>
        {name && username && <Author name={name} username={username} />}
        {username && title && <Description username={username} title={title} />}
        {name && title && (
          <Background width={50} height={50} name={name} title={title} />
        )}
        {title && body && website && (
          <Post title={title} body={body} website={website} />
        )}
        <Reactions />
      </div>
    </div>
  );
};
