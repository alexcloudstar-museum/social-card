import React from 'react';
import styled from 'styled-components';
import { Reaction } from './Reaction';

const ReactionsWrapper = styled.div`
  display: flex;

  .Comments,
  .Retweet,
  .Heart,
  .Message {
    margin: 0 15px;
  }

  .Comments {
    color: #617585;
  }

  .Retweet {
    color: #02be58;
  }

  .Heart {
    color: #e02760;
  }

  .Message {
    color: #afb7be;
    font-size: 18px;
  }
`;

export const Reactions = () => {
  return (
    <ReactionsWrapper className='text-left pt-3'>
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
    </ReactionsWrapper>
  );
};
