import styled from 'styled-components';
import { AvatarType } from '../Data/types';

export const AvatarWrapper = styled.div<AvatarType>`
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

export const Image = styled.div<AvatarType>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin: 0 auto;
  border-radius: ${({ borderRadius }) => (borderRadius ? '50%;' : undefined)};
  background-color: #1f1f1f;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: #2b2b2b;
  }
`;

export const ImageUser = styled.div<{ className?: string }>`
  top: 50%;
  left: 50%;
  color: #fff;
  margin: 0 auto;
  font-size: 28px;
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
