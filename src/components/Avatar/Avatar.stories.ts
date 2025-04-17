import Avatar from ".";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export const Default = {
  args: {
    src: "https://avatars.githubusercontent.com/u/10656202?v=4",
    alt: "Avatar",
    size: "medium",
  },
};
