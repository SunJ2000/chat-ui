import styled, { css } from "styled-components";

const circleMinxFunc = (color: string, size: number) => css`
  content: "";
  display: block;
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  background-color: ${color};
`;

interface StyledAvatarProps {
  size: number;
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

interface StatusIconProps {
  size: number;
  status: "online" | "offline";
}

const StatusIcon = styled.div<StatusIconProps>`
  position: absolute;
  left: 2px;
  top: 4px;
  &::before {
    ${({ size }) => circleMinxFunc("white", size)}
    transform: scale(2);
  }
  &::after {
    ${({ theme, size, status }) =>
      circleMinxFunc(status === "online" ? theme.green : theme.gray, size)}
  }
`;

const AvatarClip = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default StyledAvatar;

export { StatusIcon, AvatarClip, AvatarImage };
