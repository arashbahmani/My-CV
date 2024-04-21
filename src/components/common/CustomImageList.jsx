import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from "../../assets/images/gallery";
import { InfoRounded } from "@mui/icons-material";

const itemData = [
  {
    img: img1,
    title: "زنجان برفی",
    author: "زمستان سال 1401",
    featured: true,
  },
  {
    img: img2,
    title: "آبشار",
    author: "آبشار امامزاده ابراهیم شمال",
  },
  {
    img: img3,
    title: "دوچرخه سواری",
    author: "دوچرخه‌سواری در IASBS",
  },
  {
    img: img4,
    title: "سرِ کار",
    author: "دوره کارآموزی در آرین نوین ",
  },
  {
    img: img5,
    title: "در سفر",
    author: "آذر 1402",
  },
  {
    img: img6,
    title: "هتل امیرکبیر کیش",
    author: "آذر 1402 در جزیره کیش",
    featured: true,
  },
  {
    img: img7,
    title: "خانواده من",
    author: "آذرماه 1402 در کیش",
  },
  {
    img: img8,
    title: "گذر ملت",
    author: "پاییز 1402 در گذر ملت زنجان",
  },
  {
    img: img9,
    title: "روشاسنتر",
    author: "فودکورت روشاسنتر شهر",
  },
  {
    img: img10,
    title: "قمصر",
    author: "فصل گلابگیری در کاشان",
  },
  {
    img: img11,
    title: "روشاسنتر",
    author: "پیتزاهای اینجا عالی بود!",
  },
  {
    img: img12,
    title: "کافه روز خوب",
    author: "اینجا رو یه مدت خیلی دوست داشتم.",
  },
];

export default function CustomImageList() {
  return (
    <ImageList
      sx={{ width: "90%", height: "90%", margin: "0 auto", borderRadius: 1 }}
      cols={4}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ m: 0.5 }}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            style={{ borderRadius: 10 }}
          />
          <ImageListItemBar
            sx={{ borderRadius: "0 0 10px 10px", direction: "ltr" }}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{
                  color: "primary.light",
                }}
                aria-label={`info about ${item.title}`}
              >
                <InfoRounded />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
