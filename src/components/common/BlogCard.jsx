import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const BlogCard = ({ img, title, text }) => {
  return (
    <Card sx={{ display: "flex", direction: "ltr", mx: 6, my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: "10vw", height: "8vw" }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
