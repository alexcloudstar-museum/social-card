import React from 'react';
import './index.css';
import { Reaction } from './Reaction';

export const Reactions = () => {
  return (
    <div className='Reactions text-left pt-3'>
      <Reaction
        classNames={'Comments'}
        iconPrefix={'far'}
        icon={'comment'}
        reactionNumber={2}
      />
      <Reaction
        classNames={'Retweet'}
        iconPrefix={'fas'}
        icon={'retweet'}
        reactionNumber={47}
      />
      <Reaction
        classNames={'Heart'}
        iconPrefix={'fas'}
        icon={'heart'}
        reactionNumber={190}
      />
      <Reaction classNames={'Message'} iconPrefix={'far'} icon={'envelope'} />
    </div>
  );
};
