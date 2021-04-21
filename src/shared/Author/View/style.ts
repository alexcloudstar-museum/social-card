import styled from 'styled-components';

export const AuthorWrapper = styled.div`
  h1 {
    margin-right: 10px;
  }

  h3 {
    font-size: 18px;
  }
  h3 {
    span {
      font-weight: 400;
    }
  }
  .text-grey {
    color: #617585;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    h3 {
      margin-bottom: 0;
    }
  }
  @media (max-width: 991px) {
    h3 {
      font-size: 14px;
    }
  }
`;
