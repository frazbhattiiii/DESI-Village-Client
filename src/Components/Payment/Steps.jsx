import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Enter the details", "Payment Details", "Complete"];

export default function PaymentStep({ step }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{
          "& .MuiStepLabel-root .Mui-completed": {
            color: "#1ac073", // circle color (COMPLETED)
          },
          "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
            color: "white", // Just text label (COMPLETED)
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "red", // circle color (ACTIVE)
          },
          "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
            color: "common.white", // Just text label (ACTIVE)
          },
          "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
            fill: "white", // circle's number (ACTIVE)
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
