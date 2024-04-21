import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomCard from "./CustomCard";
import { Box, Typography } from "@mui/material";

const CustomCardsList = ({ title, cardsList }) => {
  return (
    <Box sx={{ direction: "ltr" }}>
      <Typography variant="h3" color="white" sx={{ mt: 6, mb: 2 }}>
        {title}
      </Typography>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {cardsList.map((card) => (
          <CustomCard
            img={card.img}
            title={card.title}
            info={card.info}
            link={card.link}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CustomCardsList;
