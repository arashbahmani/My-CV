import CustomAvatar from "../common/CustomAvatar";
import avatar from "../../assets/images/avatars/avatar1.jpg";

import { Box, Tooltip, Zoom, Fab } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";

const SidebarHeader = () => {
  return (
    <>
      <Tooltip
        disableFocusListener
        TransitionComponent={Zoom}
        title="آرش بهمنی"
        followCursor
      >
        <Box>
          <CustomAvatar avatar={avatar} size={"95%"} fallback="A B" />
        </Box>
      </Tooltip>

      <Fab
        aria-label="github"
        color="primary"
        size="small"
        sx={{ mx: 0.35, transform: "TranslateY(-70%)" }}
        href="https://github.com/arashbahmani"
        target="_blank"
      >
        <GitHub />
      </Fab>
      <Fab
        aria-label="linkedin"
        color="primary"
        size="small"
        sx={{ mx: 0.35, transform: "TranslateY(-70%)" }}
        href="www.linkedin.com/in/آرش-بهمنی-90a700234"
        target="_blank"
      >
        <LinkedIn />
      </Fab>
      <Fab
        aria-label="telegram"
        color="primary"
        size="small"
        sx={{ mx: 0.35, transform: "TranslateY(-70%)" }}
        href="https://t.me/bahmaniarash"
        target="_blank"
      >
        <Telegram />
      </Fab>
      <Fab
        aria-label="insta"
        color="primary"
        size="small"
        sx={{ mx: 0.35, transform: "TranslateY(-70%)" }}
        href="https://www.instagram.com/kamangir7878/"
        target="_blank"
      >
        <Instagram />
      </Fab>
    </>
  );
};

export default SidebarHeader;
