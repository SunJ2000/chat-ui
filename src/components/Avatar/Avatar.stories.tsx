import Avatar from ".";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    src: "https://avatars.githubusercontent.com/u/10656202?v=4",
  },
};

export const Size = () => {
  const src = "https://avatars.githubusercontent.com/u/10656202?v=4";
  return (
    <div>
      <Avatar src={src} size={30} />
      <Avatar src={src} size="small" />
      <Avatar src={src} size="large" />
    </div>
  );
};

export const Status = {
  args: {
    src: "https://avatars.githubusercontent.com/u/10656202?v=4",
    status: "online",
    size: 30,
  },
};
