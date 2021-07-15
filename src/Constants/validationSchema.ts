import * as yup from 'yup';
import translations  from "../Translations/index.json"

const {firstName,lastName,email,city,username,password} = translations.multiStepForm

export const validationSchema = [
  yup.object().shape({
    [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
    [lastName.name]: yup.string().required(lastName.requiredErrorMsg),
    [email.name]: yup
      .string()
      .required(email.requiredErrorMsg)
      .email(email.invalidErrorMsg),
    [city.name]: yup.string().required(city.requiredErrorMsg),
  }),
  yup.object().shape({
    [username.name]: yup.string().required(username.requiredErrorMsg).min(4, username.invalidErrorMsg),
    [password.name]: yup
      .string()
      .required(password.requiredErrorMsg)
      .min(8, password.invalidErrorMsg)
  })
]