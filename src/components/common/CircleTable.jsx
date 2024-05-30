import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Tooltip, Zoom } from "@mui/material";
import { useTheme } from "@emotion/react";

function CircularProgressWithLabel(props) {
  const color =
    useTheme().palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(254, 254, 254, 0.8)";

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size="10rem"
        thickness={8}
        style={{
          border: "solid rgba(0, 0, 0, 0.1) 3px",
          borderRadius: 10000,
          zIndex: 10,
        }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
          borderRadius: 10000,
        }}
      >
        <img src={props.icon} alt={props.name} width="60vh" />
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircleTable({ number, name, icon }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldNum) => {
        return Math.min(oldNum + 2, number);
      });
    }, 75);
  }, []);

  return (
    <Grid xs={6} sm={6} md={3} lg={3} xl={3} sx={{ mb: 4 }}>
      <Tooltip
        isableFocusListener
        TransitionComponent={Zoom}
        title={name}
        followCursor
      >
        <CircularProgressWithLabel value={progress} icon={icon} />
        <Typography
          variant="h3"
          color="white"
          sx={{ textAlign: "center", m: 0.5 }}
        >
          {`${Math.round(progress)}%`}
        </Typography>
      </Tooltip>
    </Grid>
  );
}
