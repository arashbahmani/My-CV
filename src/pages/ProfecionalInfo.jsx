import { Box } from "@mui/material";
import MyStepper from "../components/common/MyStepper";

import {
  ReactIcon,
  HTMLIcon,
  CSSIcon,
  FigmaIcon,
  JSIcon,
  ReduxIcon,
  GitIcon,
  GithubIcon,
  WordpressIcon,
  CCNA_RandSIcon,
  AIIcon,
  AlgorithemIcon,
  DatabaseIcon,
  MUIIcon,
} from "../assets/images/logos";
import {
  ReactToplearnCourse,
  ReactV8Course,
  CCNACourse,
  FigmaCourse,
  RhetoricalCourse,
} from "../assets/images/courses";
import CircleTablesList from "../components/common/CircleTablesList";
import CustomCardsList from "../components/common/CustomCardsList";
import { Helmet } from "react-helmet-async";

const ProfecionalInfo = ({ helmetTitle }) => {
  const skilsList = [
    { name: "React", number: 80, icon: ReactIcon },
    { name: "MUI", number: 85, icon: MUIIcon },
    { name: "Redux", number: 1, icon: ReduxIcon },
    { name: "JS", number: 65, icon: JSIcon },
    { name: "HTML", number: 90, icon: HTMLIcon },
    { name: "CSS", number: 50, icon: CSSIcon },
    { name: "Figma", number: 60, icon: FigmaIcon },
    { name: "Git", number: 20, icon: GitIcon },
    { name: "Github", number: 10, icon: GithubIcon },
    { name: "Wordpress", number: 75, icon: WordpressIcon },
    { name: "AI", number: 60, icon: AIIcon },
    { name: "Algorithems", number: 65, icon: AlgorithemIcon },
    { name: "Database", number: 45, icon: DatabaseIcon },
    { name: "CCNA R&S", number: 35, icon: CCNA_RandSIcon },
  ];

  const courcesList = [
    {
      img: ReactToplearnCourse,
      title: "دوره صفر تا صد ری‌اکت",
      info: "دوره صفر تا صد ری‌امت تاپ لرن با تدریس استاد یونس قربانی.",
      link: "https://toplearn.com/courses/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B5%D9%81%D8%B1-%D8%AA%D8%A7-%D8%B5%D8%AF-ReactJs",
    },
    {
      img: ReactV8Course,
      title: "دوره ر‌ی‌اکت V8",
      info: "دوره کامل مقدماتی V8 با تدریس برایان هالت.",
      link: "https://react-v8.holt.courses/",
    },
    {
      img: CCNACourse,
      title: "دوره CCNA R & S",
      info: "دوره روتینگ و سوئیچینگ CCNA با تدریس مهندس حمید نصرتی(2015).",
      link: "/",
    },
    {
      img: FigmaCourse,
      title: "دوره ui/ux با فیگما",
      info: "دوره طراحی UI و UX با فیگما با تدریس دنیل والتر اسکات.",
      link: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/?couponCode=LETSLEARNNOW",
    },
    {
      img: RhetoricalCourse,
      title: "دوره فن بیان",
      info: "دوره آنلاین مقدماتی فن بیان و دوبلوری با تدریس مسعود تقی‌پور.",
      link: "/",
    },
  ];

  const steps = [
    {
      title: "مدرسه علامه طباطبایی",
      info: "مدرسه راهنمایی نمونه دولتی علامه طباطبایی در سال‌های 1390 تا 93",
      link: "",
    },
    {
      title: "دبیرستان  بهشتی2 زنجان",
      info: "رشته ریاضی‌فیزیک در دبیرستان استعداد‌های درخشان شهید بهشتی 2 زنجان در سال‌های 1393 تا 97",
      link: "",
    },
    {
      title: "دانشگاه IASBS زنجان",
      info: "کارشناسی پیوسته مهندسی کامپیوتر در دانشگاه تحصیلات تکمیلی علوم‌پایه زنجان در سال‌های 1397 تا 1401",
      link: "",
    },
  ];

  return (
    <Box sx={{ height: "100%", width: "100%", overflowY: "scroll" }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Box sx={{ m: 3 }}>
        <MyStepper label="تحصیلات" steps={steps} />
        <CircleTablesList title="توانایی‌ها" tabelsList={skilsList} />
        <CustomCardsList title="دوره‌ها" cardsList={courcesList} />
      </Box>
    </Box>
  );
};

export default ProfecionalInfo;
