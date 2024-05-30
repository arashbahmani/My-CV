import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import MyStepper from "../components/common/MyStepper";
import CustomCardsList from "../components/common/CustomCardsList";
import workSamplesImage from "../assets/images/workSamples.jpg";

const Records = ({ helmetTitle }) => {
  const steps = [
    {
      title: "کارآموزی ری‌اکت",
      info: "دوره سه ماهه کارآموزی ری‌اکت در شرکت آرین نوین رایانه زنجان در تابستان 1401.",
    },
    {
      title: "چند استارت‌آپ نوپا",
      info: "فعالیت در مجموعه‌ای از استارت‌آپ‌های نوپا (مهرادشاپ، عمدینو، کدلاما، کرمچاله) که همگی جزو 90% بودن!",
    },
    {
      title: "امریه سربازی ICT",
      info: "کار در اتاق سرور و بخش ICT معدن زیرزمینی انگوران زنجان از اسفند 1402 تا امروز",
    },
  ];

  const workSamplesList = [
    {
      img: workSamplesImage,
      title: "خوان",
      info: "یه وبسایت SPA ساده برای ذخیره و نمایش اطلاعات کتاب‌ها.",
      link: "https://arashbahmani.github.io/khan/",
    },
    {
      img: workSamplesImage,
      title: "Todo List",
      info: "یک لیست امور ساده با قابلیت ساختن زیرکارها.",
      link: "https://arashbahmani.github.io/Todo/",
    },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Box sx={{ m: 3 }}>
        <MyStepper label="سابقه کار من" steps={steps} />
        <CustomCardsList title="نمونه کار‌ها" cardsList={workSamplesList} />
      </Box>
    </Box>
  );
};

export default Records;
