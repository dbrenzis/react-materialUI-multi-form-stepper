import React, { FunctionComponent } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core';
import translations from "../Translations/index.json"

const { stepLabels } = translations.stepper


type CustomStepperProps = {
    activeStep: number
}

const CustomStepper: FunctionComponent<CustomStepperProps> = ({ activeStep }) => {
    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {stepLabels.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default CustomStepper
