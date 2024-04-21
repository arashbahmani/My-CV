import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context";
import { useTheme } from "@emotion/react";

const SidebarContainer = ({ children }) => {
  const mode = useTheme().palette.mode;

  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={2}
      sx={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {console.log("mode is: ", mode)}
      <Box
        className="glassmorphism"
        sx={{
          backgroundColor:
            mode === "dark" ? "rgba(4, 7, 24, 0.4)" : "rgba(98, 58, 177, 0.4)",
        }}
        width={"100%"}
        height={"100%"}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default SidebarContainer;
