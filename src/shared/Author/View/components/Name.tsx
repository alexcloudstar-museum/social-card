import React from 'react';
import NameType from 'shared/Author/Data/types/NameType';

const Name: React.FC<NameType> = ({ name, classNames }) => (
  <h3 className={classNames}>{name}</h3>
);

export default Name;
