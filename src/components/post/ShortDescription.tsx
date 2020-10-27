import React from 'react';

type ShortDescriptionProps = {
  text: string;
};

export const ShortDescription: React.FC<ShortDescriptionProps> = ({ text }) => {
  return <p>{text}</p>;
};
