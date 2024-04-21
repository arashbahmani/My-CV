import { useContext } from "react";

import { Drawer } from "@mui/material";

import MainContext from "../../context";
import SidebarContent from "../slidebar/SidebarContent";
import { useTheme } from "@emotion/react";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  const color =
    useTheme().palette.mode === "dark"
      ? "rgba(4, 7, 24, 1)"
      : "rgba(98, 58, 177, 1)";

  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClick={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: color,

          width: 300,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
