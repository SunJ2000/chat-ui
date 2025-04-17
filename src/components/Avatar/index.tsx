import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";

interface AvatarProps {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
  status: "online" | "offline";
  statusIconSize: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <StyledAvatar>
      <StatusIcon />
      <AvatarClip>
        <AvatarImage src={props.src} alt={props.alt} />
      </AvatarClip>
    </StyledAvatar>
  );
};
export default Avatar;
