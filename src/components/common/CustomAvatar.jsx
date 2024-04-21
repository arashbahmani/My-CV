import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, size, fallback }) => {
  return (
    <Avatar
      src={avatar}
      variant="square"
      sx={{
        height: size,
        width: size,
        margin: "0 auto",
        display: {
          bgcolor: "primary",
          borderRadius: "10px 10px 0 0 ",
        },
      }}
    >
      {fallback}
    </Avatar>
  );
};

export default CustomAvatar;
