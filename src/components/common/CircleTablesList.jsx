import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CircleTable from "./CircleTable";

const CircleTablesList = ({ title, tabelsList }) => {
  return (
    <Box sx={{ direction: "ltr" }}>
      <Typography variant="h3" color="white" sx={{ mt: 6, mb: 2 }}>
        {title}
      </Typography>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        {tabelsList.map((skil) => (
          <CircleTable name={skil.name} number={skil.number} icon={skil.icon} />
        ))}
      </Grid>
    </Box>
  );
};

export default CircleTablesList;
