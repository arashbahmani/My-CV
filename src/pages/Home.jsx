import { useEffect, useRef, useCallback, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { links } from "../constants/particles";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "‌و یه برنامه‌نویس فرونت‌اند!😵‍💫",
    "من با React و فیگما کار می‌کنم.😎",
    "من یه مهندس کامپیوتر هستم.🧑‍💻",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["من آرشم 🙋‍♂️"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />

      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          direction: "ltr",
          mb: 2,
        }}
      >
        <Typography
          ref={nameEl}
          variant="h2"
          color="textColor.main"
        ></Typography>
      </Box>

      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", direction: "ltr" }}
      >
        <TextTransition springConfig={presets.wobbly}>
          <Typography variant="body1" color="textColor.main" sx={{ mt: 4 }}>
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};

export default Home;
