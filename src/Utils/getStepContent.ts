import translations  from "../Translations/index.json"

const {stepTitles, alternativeTitle} = translations.stepper

export const getStepContent = (stepIndex: number) => {
    if(stepIndex < stepTitles.length)
        return stepTitles[stepIndex];
    return alternativeTitle
  }