import "./FormStep1.css"

// Component/Hooks imports
import { useNavigate } from "react-router"
import { Formik, Form, ErrorMessage } from "formik"
import { useForm } from "../FormContext"
import FormTemplate from "../components/form/FormTemplate"
import { basicSchema } from "./schema"
import { useEffect } from "react"

const FormStep1 = () => {
    const { currentStep, setCurrentStep, formData, updateFormData, buttonState, setButtonState } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        setCurrentStep(1 + 1)
        navigate("/step2");
    }

    const handleInputChange = (e, handleFormikChange) => {
        handleFormikChange(e)
        updateFormData('step1', e.target.name, e.target.value);
    }

    console.log(formData)

    return (
        <Formik
            initialValues={{
                name: formData.step1?.name || "",
                email: formData.step1?.email || "",
                phone: formData.step1?.phone || "",
            }}
            validationSchema={basicSchema}
        >
            {({
                errors,
                touched,
                handleChange,
                handleBlur,
                values,
                isValid,
            }) => {

                // Check if form is valid and all fields have values
                const isFormValid =
                isValid &&
                values.name &&
                values.email &&
                values.phone &&
                Object.keys(errors).length === 0;

                useEffect(() => {
                    setButtonState(isFormValid);
                }, [isFormValid, values, errors]); // Runs when form validation or values change



                return (
                    <FormTemplate
                        title="Personal info"
                        description="Please provide your name, email address, and phone number."
                        onNextStep={handleNextStep}
                        isFormValid={buttonState}
                    >
                        <Form className="formik__form">
                            <div className="form__group">
                                <div className="input__text">
                                    <label htmlFor="name">Name</label>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        style={{ color: "red", fontSize: "0.9rem" }}
                                    />
                                </div>
                                <input
                                    id={`${errors.name && touched.name ? "error" : ""}`}
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Mimoun"
                                    onChange={(e) => handleInputChange(e, handleChange)}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>

                            <div className="form__group">
                                <div className="input__text">
                                    <label htmlFor="email">Email Address</label>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        style={{ color: "red", fontSize: "0.9rem" }}
                                    />
                                </div>
                                <input
                                    id={`${errors.email && touched.email ? "error" : ""}`}
                                    type="email"
                                    name="email"
                                    placeholder="e.g. mimoun123@gmail.com"
                                    onChange={(e) => handleInputChange(e, handleChange)}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>

                            <div className="form__group">
                                <div className="input__text">
                                    <label htmlFor="phone">Phone Number</label>
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        style={{ color: "red", fontSize: "0.9rem"}}
                                    />
                                </div>
                                <input
                                    id={`${errors.phone && touched.phone ? "error" : ""}`}
                                    type="number"
                                    name="phone"
                                    placeholder="e.g. +32 123 45 67 89"
                                    onChange={(e) => handleInputChange(e, handleChange)}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                            </div>
                        </Form>
                    </FormTemplate>
                )
            }}
        </Formik>
    )
}

export default FormStep1