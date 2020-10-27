import React from 'react';

type NameProps = {
  name: string;
  classNames: string;
};

export const Name: React.FC<NameProps> = ({ name, classNames }) => {
  return <h3 className={classNames}>{name}</h3>;
};
