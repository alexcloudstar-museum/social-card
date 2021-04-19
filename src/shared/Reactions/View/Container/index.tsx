import { FC } from 'react';
import { Reaction } from '../Components/Reaction';
import { ReactionsWrapper } from '../style';

const randomizeReactionsNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};

export const Reactions: FC = () => {
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
