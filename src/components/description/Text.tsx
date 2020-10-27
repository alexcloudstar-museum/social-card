import React from 'react';
import styled from 'styled-components';

type TextProps = {
  text: string;
  author: string;
};

const TextWrapper = styled.div`
  h5 {
    font-weight: 400;
    font-size: 16px;
  }

  span {
    color: #63afe7;
  }
`;

export const Text: React.FC<TextProps> = ({ text, author }) => {
  return (
    <TextWrapper>
      <h5>{text}</h5>
      <h5>
        author: <span>@{author}</span>
      </h5>
    </TextWrapper>
  );
};
