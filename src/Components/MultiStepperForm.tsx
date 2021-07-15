import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { validationSchema } from '../Constants/validationSchema';
import { getStepContent } from '../Utils/getStepContent';
import CustomStepper from './Stepper';
import { PersonalDetails, AccountDetails } from './Form';
import FormNavigation from "./FormNavigation"
import translations from "../Translations/index.json"

const { firstName, lastName, email, city, username, password } = translations.multiStepForm

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: "100vh"
    },
    container: {
        backgroundColor: theme.palette.common.white,
        paddingBottom: theme.spacing(3),
    },
    title: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const MultiStepperForm = () => {
    const { gridContainer, container, title } = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const formik = useFormik({
        initialValues: {
            [firstName.name]: "",
            [lastName.name]: "",
            [email.name]: "",
            [city.name]: "",
            [username.name]: "",
            [password.name]: "",
        },
        validationSchema: validationSchema[activeStep],
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { validateForm } = formik
    useEffect(() => {
        validateForm()
    }, [validateForm])

    return (
        <Grid container justify="center" alignItems="center" className={gridContainer}>
            <Container maxWidth="sm" className={container}>
                <CustomStepper activeStep={activeStep} />
                <Typography variant="h5" className={title}>{getStepContent(activeStep)}</Typography>
                <form onSubmit={formik.handleSubmit}>
                    {activeStep === 0 && <PersonalDetails formik={formik} />}
                    {activeStep === 1 && <AccountDetails formik={formik} />}
                    <FormNavigation activeStep={activeStep} setActiveStep={setActiveStep} isValid={formik.isValid} />
                </form>
            </Container>
        </Grid>
    );
}

export default MultiStepperForm
