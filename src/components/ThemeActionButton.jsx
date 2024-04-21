import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Fab, Tooltip } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import mainContext from "../context";

const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(mainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        right: "1vw",
        bottom: "1vh",
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <Tooltip title="تغییر به تم روشن" placement="right">
            <WbSunnyOutlined />
          </Tooltip>
        ) : (
          <Tooltip title="تغییر به تم تیره" placement="right">
            <NightlightOutlined />
          </Tooltip>
        )}
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
