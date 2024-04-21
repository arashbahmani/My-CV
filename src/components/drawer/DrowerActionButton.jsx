import { useContext } from "react";

import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";

const DrowerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  const secondaryColor = "#CEBEEF";

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Slider"
        size="small"
        onClick={() => setDrawerOpen(true)}
        sx={{ backgroundColor: secondaryColor, m: 2 }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrowerActionButton;
