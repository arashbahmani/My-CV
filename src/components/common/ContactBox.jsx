import { useState, useEffect } from "react";

import { Card, CardContent, Slide } from "@mui/material";

import ContactForm from "../common/ContactForm";

const ContactBox = () => {
  const [loading, setLoading] = useState(false);

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
          }}
        >
          <ContactForm />
        </Card>
      </Slide>
    </CardContent>
  );
};

export default ContactBox;
