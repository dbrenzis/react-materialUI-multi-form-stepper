import React, { FunctionComponent } from 'react'
import { TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import { menuItemsCity } from '../../Constants/menuItemsCity';
import translations from "../../Translations/index.json";

const { firstName, lastName, email, city } = translations.multiStepForm

type PersonalDetailsProps = {
    formik: any
}

const PersonalDetails: FunctionComponent<PersonalDetailsProps> = ({ formik }) => {
    return (
        <>
            <TextField
                fullWidth
                id={firstName.name}
                name={firstName.name}
                label={firstName.label}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[firstName.name] && Boolean(formik.errors[firstName.name])}
                helperText={(formik.touched[firstName.name] && formik.errors[firstName.name]) ?? firstName.requiredErrorMsg}
            />
            <TextField
                fullWidth
                id={lastName.name}
                name={lastName.name}
                label={lastName.label}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[lastName.name] && Boolean(formik.errors[lastName.name])}
                helperText={(formik.touched[lastName.name] && formik.errors[lastName.name]) ?? lastName.requiredErrorMsg}
            />
            <TextField
                fullWidth
                id={email.name}
                name={email.name}
                label={email.label}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[email.name] && Boolean(formik.errors[email.name])}
                helperText={(formik.touched[email.name] && formik.errors[email.name]) ?? email.requiredErrorMsg}
            />
            <FormControl fullWidth error={formik.touched.city && Boolean(formik.errors.city)}>
                <InputLabel id="inputCity">{city.label}</InputLabel>
                <Select
                    labelId="inputCity"
                    id={city.name}
                    name={city.name}
                    value={formik.values[city.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {menuItemsCity.map((item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)}
                </Select>
                <FormHelperText>{(formik.touched[city.name] && formik.errors[city.name]) ?? city.requiredErrorMsg}</FormHelperText>
            </FormControl>
        </>
    )
}

export default PersonalDetails
