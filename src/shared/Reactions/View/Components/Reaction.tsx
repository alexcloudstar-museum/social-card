import { FC } from 'react';
import { ReactionType } from 'shared/Reactions/Data/types';

export const Reaction: FC<ReactionType> = ({
  classNames,
  iconPrefix,
  icon,
  reactionNumber,
}) => (
  <div className={`text-left ${classNames}`}>
    <i className={`${iconPrefix} fa-${icon}`}></i>
    <span>&nbsp;&nbsp;{reactionNumber && reactionNumber.toString()}</span>
  </div>
);
