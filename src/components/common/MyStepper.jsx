import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MyStepper({ label, steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ m: 4, direction: "ltr" }}>
      <Box sx={{ width: "100%", direction: "ltr" }}>
        <Typography variant="h2" color="white" sx={{ my: 6 }}>
          {label}
        </Typography>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.title} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {step.title}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        <div>
          <>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 2, mb: 1, py: 1 }}
            >
              {steps[activeStep].info}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="secondary"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                قبلی
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                بعدی
              </Button>
            </Box>
          </>
        </div>
      </Box>
    </Box>
  );
}
