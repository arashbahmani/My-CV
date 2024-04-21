import { Box, Divider } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarTabs from "./SidebarTabs";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <SidebarHeader />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
