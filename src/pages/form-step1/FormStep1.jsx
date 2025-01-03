import "./FormStep1.css";

// Component/Hooks imports
import { Formik, Form, ErrorMessage } from "formik";
import { useForm } from "../FormContext";
import FormTemplate from "../components/form/FormTemplate";
import { basicSchema } from "./schema";
import { useEffect } from "react";

const FormStep1 = () => {
  const { formData, updateFormData, buttonState, setButtonState } = useForm();

  const handleInputChange = (e, handleFormikChange) => {
    handleFormikChange(e);
    updateFormData("step1", e.target.name, e.target.value);
  };

  return (
    <Formik
      initialValues={{
        name: formData.step1?.name || "",
        email: formData.step1?.email || "",
        phone: formData.step1?.phone || "",
      }}
      validationSchema={basicSchema}
    >
      {({ errors, touched, handleChange, handleBlur, values, isValid }) => {
        const isFormValid =
          isValid &&
          values.name &&
          values.email &&
          values.phone &&
          Object.keys(errors).length === 0;

        useEffect(() => {
          setButtonState(isFormValid);
        }, [isFormValid, values, errors]);

        return (
          <FormTemplate
            title="Personal info"
            description="Please provide your name, email address, and phone number."
            buttonTitle="Next Step"
            step={1}
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
                  id="name"
                  className={`${
                    errors.name && touched.name
                      ? "error"
                      : touched.name && !errors.name
                      ? "valid"
                      : ""
                  }`}
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
                  id="email"
                  className={`${
                    errors.email && touched.email
                      ? "error"
                      : touched.email && !errors.email
                      ? "valid"
                      : ""
                  }`}
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
                    style={{ color: "red", fontSize: "0.9rem" }}
                  />
                </div>
                <input
                  id="phone"
                  className={`${
                    errors.phone && touched.phone
                      ? "error"
                      : touched.phone && !errors.phone
                      ? "valid"
                      : ""
                  }`}
                  type="text"
                  name="phone"
                  placeholder="e.g. +32 123 45 67 89"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
            </Form>
          </FormTemplate>
        );
      }}
    </Formik>
  );
};

export default FormStep1;
