import React from 'react';

type ReactionProps = {
  classNames: string;
  iconPrefix: string;
  icon: string;
  reactionNumber?: number;
};

export const Reaction: React.FC<ReactionProps> = ({
  classNames,
  iconPrefix,
  icon,
  reactionNumber,
}) => {
  return (
    <div className={`text-left ${classNames}`}>
      <i className={`${iconPrefix} fa-${icon}`}></i>
      <span>&nbsp;&nbsp;{reactionNumber && reactionNumber.toString()}</span>
    </div>
  );
};
