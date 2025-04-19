import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large" | number;
  status?: "online" | "offline";
  statusIconSize?: number;
  [key: string]: any;
}
const sizeMap = {
  small: 32,
  medium: 48,
  large: 64,
};

const getMegredSize = (size: AvatarProps["size"]) => {
  if (size === undefined) {
    return sizeMap["medium"];
  }
  if (typeof size === "number") {
    return size;
  }

  return sizeMap[size];
};

const Avatar = (props: AvatarProps) => {
  const { src, alt, size, status, statusIconSize, ...rest } = props;

  const megredAlt = alt || "Avatar";
  const megredSize = getMegredSize(size);
  const megredStatusIconSize = statusIconSize || megredSize / 6;

  return (
    <StyledAvatar {...rest} size={megredSize}>
      {status && <StatusIcon size={megredStatusIconSize} status={status} />}
      <AvatarClip>
        <AvatarImage src={src} alt={megredAlt} />
      </AvatarClip>
    </StyledAvatar>
  );
};
export default Avatar;
