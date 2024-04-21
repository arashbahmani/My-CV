import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Info = ({ label, name }) => {
  return (
    <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
      <Box sx={{ display: "flex", mb: 4, ml: 6 }}>
        <Typography color="white" variant="body2" sx={{ mr: 2 }}>
          {label}
        </Typography>
        <Typography
          color="white"
          variant="h3"
          sx={{ transform: "translateY(-20%)" }}
        >
          {name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Info;
