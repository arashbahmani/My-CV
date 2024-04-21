import { Helmet } from "react-helmet-async";
import CustomImageList from "../components/common/CustomImageList";
import { Box } from "@mui/material";

const Gallery = ({ helmetTitle }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CustomImageList />
    </Box>
  );
};

export default Gallery;
