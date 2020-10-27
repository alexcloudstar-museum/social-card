import React from 'react';

type TextProps = {
  text: string;
  author: string;
};

export const Text: React.FC<TextProps> = ({ text, author }) => {
  return (
    <>
      <h5>{text}</h5>
      <h5>
        author: <span>@{author}</span>
      </h5>
    </>
  );
};
