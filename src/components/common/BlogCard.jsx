import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const BlogCard = ({ img, title, text }) => {
  return (
    <Card
      sx={{
        display: "flex",
        direction: "ltr",
        mx: 6,
        my: 2,
        backgroundColor: "secondary.light",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "15%" }}
        image={img}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4" sx={{ mx: 2 }}>
            {title}
          </Typography>
          <Typography
            variant="body3"
            color="text.secondary"
            component="div"
            sx={{ my: 2 }}
          >
            {text}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
