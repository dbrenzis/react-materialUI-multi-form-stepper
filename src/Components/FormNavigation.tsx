import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Button, Tooltip, Grid, makeStyles } from '@material-ui/core';
import translations from "../Translations/index.json"

const useStyles = makeStyles((theme) => ({
    controllBar: {
        marginTop: theme.spacing(4),
    }
}));

type FormNavigationProps = {
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>
    isValid: boolean
}

const FormNavigation: FunctionComponent<FormNavigationProps> = ({ activeStep, setActiveStep, isValid }) => {
    const { controllBar } = useStyles();
    const { backButton, continueButton, submitButton, toolTipText } = translations.formNavigation
    const handleNext = async () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <Grid container justify="space-between" className={controllBar}>
            <Grid item>
                <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>{backButton}</Button>
            </Grid>
            <Grid item>
                <Tooltip title={toolTipText} disableHoverListener={isValid}>
                    <span>
                        {activeStep === 1 ?
                            <Button key="submit" variant="outlined" type="submit" disabled={!isValid}>{submitButton}</Button>
                            :
                            <Button key="next" variant="outlined" disabled={!isValid} onClick={handleNext}>{continueButton}</Button>}
                    </span>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default FormNavigation
