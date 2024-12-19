import * as Yup from "yup"


export const basicSchema = Yup.object({
    name: Yup.string().min(2).required(" A name is required"),
    email: Yup.string().email("Please enter a valid email").required("An email is required"),
    phone: Yup.string()
    .matches(
        /^\+?[1-9]\d{1,14}$/,
        "Please enter a valid phone number (e.g. +32 123 45 67 89)"
    )
    .required("A phone number is required"),
});