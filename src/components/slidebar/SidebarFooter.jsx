import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        height: 100,
        mb: 2,
      }}
    >
      <Typography variant="body3" color="textColor.main" sx={{ ml: 1 }}>
        طراحی شده با
        <FavoriteRounded
          sx={{
            verticalAlign: "middle",
            color: "tomato",
            height: 20,
          }}
        />
      </Typography>
      <Typography variant="body2" color="textColor.main" sx={{ mt: 1 }}>
        <CopyrightRounded sx={{ verticalAlign: "middle", height: 16, m: 0 }} />
        کپی رایت 1403
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
