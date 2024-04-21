import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import ContactBox from "../components/common/ContactBox";

const Contacts = ({ helmetTitle }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        direction: "ltr",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Grid container sx={{ m: 6 }}>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ display: "flex" }}>
            <Typography color="textColor.main" variant="body2" mr={2}>
              موبایل:
            </Typography>
            <Typography color="textColor.main" variant="body1">
              09965418427
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography color="textColor.main" variant="body2" mr={2}>
              ایمیل:
            </Typography>
            <Typography color="textColor.main" variant="h3">
              arashbahmani7878@gmail.com
            </Typography>
          </Box>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          sx={{
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            mt: "1vh",
          }}
        >
          <Typography color="textColor.main" variant="body1" mr={6}>
            ساعت در دسترس بودنم :
          </Typography>
          <Typography color="textColor.main" variant="body1" mr={2}>
            9:00 تا 13:00
          </Typography>
          <Typography color="textColor.main" variant="body1" mr={2}>
            و
          </Typography>
          <Typography color="textColor.main" variant="body1">
            15:00 تا 21:00
          </Typography>
        </Grid>
      </Grid>

      <ContactBox />
    </Box>
  );
};

export default Contacts;
