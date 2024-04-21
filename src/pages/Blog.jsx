import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import BlogCard from "../components/common/BlogCard";

import {
  birthdayImg,
  militaryServiceImg,
  pluginImg,
  zanjanImg,
} from "../assets/images/blogs";

const blogsData = [
  {
    img: militaryServiceImg,
    title: "دارم میرم خدمت!",
    text: "از ۱ دی ۱۴۰۲ به خدمت اعزام شدم و بعد دوره آموزشی، الان به عنوان سرباز امریه  بخش ICT در معدن انگوران مشغول به کار هستم.",
  },
  {
    img: pluginImg,
    title: "یادگیری پلاگین نویسی وردپرس",
    text: "قصد دارم در زمینه طراحی و توسعه پلاگین‌های وردپرسی با React کار کنم. هنوز شروع نکردم اما به زودی میرم روی کار! اگه در این باره اطلاعاتی دارید حتما با من در میون بگذارید.",
  },
  {
    img: birthdayImg,
    title: "درباره تولدم!",
    text: "من نیمه شب ۱۱ام اسفند ۱۳۷۸ در شهر زنجان به دنیا اومدم. الان که دارم اینو می‌نویسم دقیقا ۲۴سال و ۱ماه و ۱۸ روز سن دارم و تمام این مدت رو در زنجان ساکن بودم.",
  },
  {
    img: zanjanImg,
    title: "درباره زنجان",
    text: "زنجان در بخش شمال‌غرب کشور و از مناطق تُرکی زبان ایران هست. سوغات‌های مهمش چاقو و ملیله و مس هست. اینجا یه شهر متوسط و متعادل با آب‌وهوای پاک و کمی سرده که من خیلی دوستش دارم.",
  },
];

const Blog = ({ helmetTitle }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Box>
        {blogsData.map((data) => (
          <BlogCard title={data.title} text={data.text} img={data.img} />
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
