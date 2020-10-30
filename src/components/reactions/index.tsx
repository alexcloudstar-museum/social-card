import React from 'react';
import styled from 'styled-components';
import { Reaction } from './Reaction';

const randomizeReactionsNumber = (): number => {
  // returns a random integer from 1 to 100
  return Math.floor(Math.random() * 100) + 1;
};

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
        reactionNumber={randomizeReactionsNumber()}
      />
      <Reaction
        classNames={'Retweet'}
        iconPrefix={'fas'}
        icon={'retweet'}
        reactionNumber={randomizeReactionsNumber()}
      />
      <Reaction
        classNames={'Heart'}
        iconPrefix={'fas'}
        icon={'heart'}
        reactionNumber={randomizeReactionsNumber()}
      />
      <Reaction classNames={'Message'} iconPrefix={'far'} icon={'envelope'} />
    </ReactionsWrapper>
  );
};
