import { useState, useEffect } from "react";

import { Card, CardContent, Slide } from "@mui/material";

import ContactForm from "../common/ContactForm";
import { useTheme } from "@emotion/react";

const ContactBox = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme().palette.mode;

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <CardContent sx={{ m: 4 }}>
      <Slide
        direction="up"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
      >
        <Card
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme === "dark" ? "#1e1e1e" : "#c6c6c6",
          }}
        >
          <ContactForm />
        </Card>
      </Slide>
    </CardContent>
  );
};

export default ContactBox;
