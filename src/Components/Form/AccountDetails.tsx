import React, { FunctionComponent } from 'react'
import { TextField } from '@material-ui/core';
import translations from "../../Translations/index.json";

const { username, password } = translations.multiStepForm

type AccountDetailsProps = {
    formik: any
}

const AccountDetails: FunctionComponent<AccountDetailsProps> = ({ formik }) => {
    return (
        <>
            <TextField
                fullWidth
                id={username.name}
                name={username.name}
                label={username.label}
                value={formik.values[username.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[username.name] && Boolean(formik.errors[username.name])}
                helperText={(formik.touched[username.name] && formik.errors[username.name]) ?? username.requiredErrorMsg}
            />
            <TextField
                fullWidth
                id={password.name}
                name={password.name}
                label={password.label}
                type="password"
                value={formik.values[password.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[password.name] && Boolean(formik.errors[password.name])}
                helperText={(formik.touched[password.name] && formik.errors[password.name]) ?? password.requiredErrorMsg}
            />
        </>
    )
}

export default AccountDetails
