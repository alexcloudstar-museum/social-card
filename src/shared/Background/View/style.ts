import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-color: #ffa003;
  text-align: left;
  .avatar-col {
    justify-content: flex-start;
    padding-top: 10px;
    .Avatar {
      .image {
        border-radius: 0;
      }
      .image-user {
        font-size: 24px;
        left: 50%;
      }
    }
  }
  .heading {
    font-size: 60px;
  }
  @media (max-width: 767px) {
    .Avatar {
      .image {
        margin: initial;
      }
    }
    .Avatar {
      .image-user {
        top: 50%;
        left: 39px !important;
      }
    }
  }
`;
