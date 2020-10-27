import React from 'react';
import styled from 'styled-components';
import { Avatar, AvatarProps } from '../Avatar';
import { Profile } from '../Profile';

type BackgroundProps = AvatarProps & {
  text?: string;
};

const BackgroundWrapper = styled.div`
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

export const Background: React.FC<BackgroundProps> = ({
  text,
  width,
  height,
}) => {
  return (
    <BackgroundWrapper className='Background mt-4'>
      <Avatar
        shortUsername={'AC'}
        borderRadius={false}
        width={width}
        height={height}
      />
      <h3 className='mt-5 mb-5 ml-5 pl-3 text-white heading'>{text}</h3>
      <Profile />
    </BackgroundWrapper>
  );
};
