import styled from 'styled-components';

export const ReactionsWrapper = styled.div`
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
