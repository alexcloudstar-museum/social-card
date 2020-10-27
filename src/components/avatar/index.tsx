import React from 'react';
import styled from 'styled-components';

export type AvatarProps = {
  shortUsername?: string;
  width: number;
  height: number;
  borderRadius?: boolean;
};

export const AvatarWrapper = styled.div<AvatarProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  @media (max-width: 767px) {
    margin-bottom: 5px;
  }

  @media (min-width: 778px) {
    .avatar-col {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Image = styled.div<AvatarProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin: 0 auto;
  border-radius: ${({ borderRadius }) => (borderRadius ? '50%;' : undefined)};
  background-color: black;
`;

const ImageUser = styled.div`
  top: 50%;
  left: 50%;
  color: #fff;
  margin: 0 auto;
  font-size: 28px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Avatar: React.FC<AvatarProps> = ({
  shortUsername,
  width = 70,
  height = 70,
  borderRadius = true,
}) => {
  return (
    <div className='avatar-col col-sm-12 col-md-2'>
      <AvatarWrapper width={width} height={height} className='Avatar'>
        <Image
          width={width}
          height={height}
          borderRadius={borderRadius}
          className='image'
        />
        <ImageUser className='image-user'>{shortUsername}</ImageUser>
      </AvatarWrapper>
    </div>
  );
};
