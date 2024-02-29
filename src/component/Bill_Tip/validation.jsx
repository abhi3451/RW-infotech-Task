// validationSchema.js
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Bill: Yup.number()
    .positive("Bill must be greater than 0")
    .required("Bill is required"),
  custom: Yup.number().positive("Custom Tip must be greater than 0"),
  NumberOfPeople: Yup.number()
    .positive("Number of People must be greater than 0")
    .required("Number of People is required"),
});

export default validationSchema;
